const btn = document.querySelector(".btn");
const close = document.querySelector(".close");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modalContent");

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

function openModal() {
    modal.style.display = "block"
}

function closeModal() {
    modalContent.classList.add('slideUp');
    // modal.style.display = "none"
    setTimeout(() => {
        modal.style.display = 'none'
        modalContent.classList.remove('slideUp');

    }, 500);
}