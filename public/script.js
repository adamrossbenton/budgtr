const bankAccount = document.getElementById("bank-account")

let balance = 1000

const displayBankAccount = () => {
    bankAccount.html(`Balance: ${balance}`)
}

displayBankAccount()

////////////////////////////////////////
// NOTES/SOURCES:
////////////////////////////////////////

// jQuery both client/server-side
// https://stackoverflow.com/questions/40207912/how-to-use-jquery-with-my-node-js-ejs-template

////////////////////////////////////////
// CODE GRAVEYARD
////////////////////////////////////////

// Trying this without jQuery:
// const $bankAccount = $('#bank-account')

// let balance = 1000

// const displayBankAccount = () => {
//     $bankAccount.html(`Balance: ${balance}`)
// }

// displayBankAccount()
