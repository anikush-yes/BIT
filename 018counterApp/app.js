document.addEventListener("DOMContentLoaded", () => {
    const countSpan = document.querySelector(".count");
    const subtractBtn = document.querySelector(".subtract");
    const resetBtn = document.querySelector(".reset");
    const addBtn = document.querySelector(".add");

    let count = 0;

    function setColor() {
        if (count > 0) {
            countSpan.style.color = "green";
        } else if (count < 0) {
            countSpan.style.color = "red";
        } else {
            countSpan.style.color = "black";
        }
    }

    subtractBtn.addEventListener("click", () => {
        count--;
        countSpan.textContent = count;
        setColor();
    });

    resetBtn.addEventListener("click", () => {
        count = 0;
        countSpan.textContent = count;
        setColor();
    });

    addBtn.addEventListener("click", () => {
        count++;
        countSpan.textContent = count;
        setColor();
    });
});