// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".

function loginLogout() {
    if (loginButton.innerText === 'Log in') {
        loginButton.innerText = 'Log out';
    } else if (loginButton.innerText === 'Log out') {
        loginButton.innerText = 'Log in';
    };
};

let loginButton = document.querySelector('#auth');
loginButton.addEventListener('click', loginLogout);

// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

function alertFunc() {
    alert(`${alertMessage.value}`);
};

let alertMessage = document.querySelector('#alert-message');
let sendAlert = document.querySelector('#send-alert button');
sendAlert.addEventListener('click', alertFunc);

// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-ulick to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

function add() {
    list.innerHTML = list.innerHTML + '<li>item</li>'
}

let itemAdder = document.querySelector('#item-adder');
let list = document.querySelector('#list');
itemAdder.addEventListener('dblclick', add)

// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

function redChanger() {
    for (const item of text) {
        item.style = 'color: red;'
    }
}

function blueChanger() {
    for (const item of text) {
        item.style = 'color: blue;'
    }
}

let blueButton = document.querySelector('#blue')
let redButton = document.querySelector('#red')
let text = document.querySelectorAll('.changes-colors')
redButton.addEventListener('click', redChanger)
blueButton.addEventListener('click', blueChanger)

// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span

let inputNum = document.querySelector('#factorial-input');
let result = document.querySelector('#result');
document.querySelector('#factorial-calculator button').addEventListener('click', (evt) => {
    evt.preventDefault();
    if (inputNum.value === 0 || inputNum.value === 1) {
        result.innerText = `${inputNum.value}`;
    };
    for (let i = inputNum.value - 1; i >= 1; i--) {
        inputNum.value *= i;
    };
    result.innerText = `${inputNum.value}`;
    inputNum.value = '';
})

// Validate a form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

let word1 = document.querySelector('#word');
let feedbackText = document.querySelector('#recommend-word p')
document.querySelector('#recommend-word button').addEventListener('click', (evt) => {
    evt.preventDefault();
    if (word1.value.length < 4) {
        feedbackText.innerText = 'The word must be at least 4 characters long.';
        feedbackText.style = 'color: red;';
    } else {
        feedbackText.innerText = 'Thanks for your submission!';
        feedbackText.style = 'color: green;';
    };
});
