const navLink = document.querySelector('.navigation_list');
const navBG = document.querySelector('.navigation-background');
const nav = document.querySelector('.navigation');
const checkBox = document.querySelector('.navigation-button');
const fullYear = document.querySelector('.year');

const year = new Date().getFullYear();
fullYear.textContent = year;

function toggleCheckbox() {
    let checkbox = document.getElementById('navi-toggle');
    checkbox.checked = !checkbox.checked;
};


function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mattalvarez354@yahoo.com",
        Password : "6EB614A8F6B5CBBD0B08F865CECCF66BC311",
        To : 'mattalvarez354@yahoo.com',
        From : document.getElementById("email").value,
        Subject : "New contact form inquiry",
        Body : document.getElementById("text-area").value
    }).then(
        message => alert("Your message was sent successfully")
    );
}
