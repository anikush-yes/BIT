document.addEventListener("DOMContentLoaded", () => {
    // Gauti duomenis iš API
    fetch("https://in3.dev/inv/")
        .then(response => {
            if (!response.ok) {
                throw new Error("Nepavyko gauti duomenų iš API");
            }
            return response.json();
        })
        .then(data => {
            // Apdoroti gautus duomenis
            generateInvoice(data);
        })
        .catch(error => {
            console.error("Klaida:", error);
        });
});

// Sąskaitos faktūros generavimas
function generateInvoice(data) {
    const tbody = document.querySelector("tbody");
    const totals = document.querySelectorAll(".totals td:last-child");

    // Apskaičiavimai
    let subtotal = 0;

    // Pirmiausia apdorojame produktus ir apskaičiuojame tarpinę sumą
    data.items.forEach(item => {
        const discountValue =
            item.discount.type === "percentage"
                ? (item.price * item.discount.value) / 100
                : 0;
        const priceAfterDiscount = item.price - discountValue;
        const total = priceAfterDiscount * item.quantity;
        subtotal += total;

        // Eilutės kūrimas lentelėje
        tbody.innerHTML += `
            <tr>
                <td>${item.description}</td>
                <td>${item.quantity}</td>
                <td>${item.price.toFixed(2)} €</td>
                <td>${item.discount.type === "percentage" ? `-${item.discount.value}% (-${discountValue.toFixed(2)} €)` : '-'}</td>
                <td>${total.toFixed(2)} €</td>
            </tr>
        `;
    });

   // Įtraukiame transportavimo kainą į tarpinę sumą
   const shippingPrice = data.shippingPrice || 0;  // Jei nėra transportavimo kainos, priskiriame 0
   subtotal += shippingPrice;

   // Rodome transportavimo kainą
   const shippingRow = document.createElement("tr");
   shippingRow.innerHTML = `
       <td>Transportavimo kaina:</td>
       <td></td>
       <td></td>
       <td></td>
       <td>${shippingPrice.toFixed(2)} €</td>
   `;

 

//    tbody.appendChild(shippingRow);


    // Apskaičiuojame PVM ir galutinę sumą su PVM
    const vat = subtotal * 0.21;
    const totalWithVAT = subtotal + vat;

    // Rodome sumas
    totals[0].textContent = `${subtotal.toFixed(2)} €`;  // Tarpinė suma
    totals[1].textContent = `${shippingPrice.toFixed(2)} €`; //Transportavimo
    totals[2].textContent = `${vat.toFixed(2)} €`;      // PVM
    totals[3].textContent = `${totalWithVAT.toFixed(2)} €`;  // Galutinė suma su PVM
}