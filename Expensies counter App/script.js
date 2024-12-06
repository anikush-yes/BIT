// script.js

// Pasirenkame DOM elementus
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const addExpenseButton = document.getElementById('add-expense');
const totalAmountElement = document.getElementById('total-amount');
const expenseList = document.getElementById('expense-list');

// Kintamasis, kuriame saugosime visas išlaidas
let expenses = [];

// Funkcija pridėti išlaidą
function addExpense() {
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());

    // Patikriname, ar įvesti duomenys yra tinkami
    if (name === '' || isNaN(amount) || amount <= 0) {
        alert('Prašome įvesti tinkamus duomenis.');
        return;
    }

    // Sukuriame objektą su išlaidomis
    const expense = {
        name: name,
        amount: amount
    };

    // Pridedame išlaidą į masyvą
    expenses.push(expense);

    // Atnaujiname bendrą sumą
    updateTotalAmount();

    // Atnaujiname sąrašą
    renderExpenseList();

    // Išvalome laukus
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
}

// Funkcija atnaujinti bendrą sumą
function updateTotalAmount() {
    const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
    totalAmountElement.textContent = totalAmount.toFixed(2);
}

// Funkcija atvaizduoti išlaidų sąrašą
function renderExpenseList() {
    expenseList.innerHTML = '';  // Išvalome sąrašą

    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.textContent = `${expense.name}: €${expense.amount.toFixed(2)}`;
        expenseList.appendChild(li);
    });
}

// Pridėti išlaidą paspaudus mygtuką
addExpenseButton.addEventListener('click', addExpense);

// Papildomas funkcionalumas, jei norite naudoti Enter klavišą
expenseAmountInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addExpense();
    }
});