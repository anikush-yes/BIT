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
function generateInvoice(data) {
    const tbody = document.querySelector("tbody");
    const totals = document.querySelectorAll(".totals td:last-child");

    // Apskaičiavimai
    let subtotal = 0;

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

    // Pridėti transportavimo kainą
    subtotal += data.shippingPrice;
    const vat = subtotal * 0.21;
    const totalWithVAT = subtotal + vat;

    // Atvaizduoti sumas
    totals[0].textContent = `${subtotal.toFixed(2)} €`;
    totals[1].textContent = `${vat.toFixed(2)} €`;
    totals[2].textContent = `${totalWithVAT.toFixed(2)} €`;

    // Užpildyti kitas dalis (pardavėjas, pirkėjas ir t.t.)
    document.querySelector(".header div:first-child").innerHTML = `
        <h2>Pardavėjas</h2>
        <p>${data.company.seller.name}</p>
        <p>Adresas: ${data.company.seller.address}</p>
        <p>Įmonės kodas: ${data.company.seller.code}</p>
        <p>PVM kodas: ${data.company.seller.vat}</p>
        <p>Telefonas: ${data.company.seller.phone}</p>
        <p>El. paštas: ${data.company.seller.email}</p>
    `;
    document.querySelector(".header div:last-child").innerHTML = `
        <h2>Pirkėjas</h2>
        <p>${data.company.buyer.name}</p>
        <p>Adresas: ${data.company.buyer.address}</p>
        <p>Įmonės kodas: ${data.company.buyer.code}</p>
        <p>PVM kodas: ${data.company.buyer.vat}</p>
        <p>Telefonas: ${data.company.buyer.phone}</p>
        <p>El. paštas: ${data.company.buyer.email}</p>
    `;
    document.querySelector("p:nth-of-type(1)").textContent = `Sąskaitos numeris: ${data.number}`;
    document.querySelector("p:nth-of-type(2)").textContent = `Sąskaitos data: ${data.date}`;
    document.querySelector("p:nth-of-type(3)").textContent = `Apmokėti iki: ${data.due_date}`;
}