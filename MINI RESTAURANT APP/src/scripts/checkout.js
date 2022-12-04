

import {navbar} from "./navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML=navbar();


let btn=document.getElementById('place-order');
btn.onclick=()=>{
  sub();
}

let  sub=()=>{
  let orderConfirm = document.getElementById("order-message");
  orderConfirm.textContent = "Your order is succesfully placed";
  localStorage.clear();
  setTimeout(() => {
    location.replace("index.html");
  }, 1000);
}
