const div1 = document.getElementById("first");
const div2 = document.getElementById("second");
const div3 = document.getElementById("third");
const div4 = document.getElementById("four");
const img = document.getElementById("art");
const desc = document.getElementById("desc");
const price = document.getElementById("price");
const free = document.getElementById("free");
const express = document.getElementById("express");
const shippingField = document.getElementById("shipping");
const total = document.getElementById("total");

// update totalprice
function updateTotal() {
    // console.log(shippingField.innerText, price.innerText)
    const shippingCharge = Number(shippingField.innerText);
    const productPrice = Number(price.innerText);
    const grandTotal = shippingCharge + productPrice;
    total.innerText = grandTotal;
}

free.addEventListener('click', function () {
    shippingField.innerText = "5";
    updateTotal()
});
express.addEventListener('click', function () {
    shippingField.innerText = "30";
    updateTotal()
});
div1.addEventListener('click', function () {
    img.src = "images/1.jpg";
    desc.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae adipisci possimus asperiores distinctio nemo vitae sunt repellendus nam quibusdam soluta?";
    price.innerText = "750";
    updateTotal()
});
div2.addEventListener('click', function () {
    img.src = "images/2.jpg";
    desc.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iure ipsam numquam cumque sed laborum. Similique eligendi praesentium iste.";
    price.innerText = "630";
    updateTotal()
});
div3.addEventListener('click', function () {
    img.src = "images/3.jpg";
    desc.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, ex. Autem in eligendi beatae dolorem cum est rerum cumque suscipit corporis unde! Enim, voluptatibus porro!";
    price.innerText = "690";
    updateTotal()
});
div4.addEventListener('click', function () {
    img.src = "images/4.jpg";
    desc.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, ex. Autem in eligendi beatae dolorem cum est rerum cumque suscipit corporis unde! Enim, voluptatibus porro!";
    price.innerText = "700";
    updateTotal()
});
