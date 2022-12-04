
import {navbar} from "./navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML=navbar();



let data = JSON.parse(localStorage.getItem("cart")) || [];

let cart_count=(i)=> {  
    let c = document.getElementById("cart_count");
                c.innerText = i;
     }
         
     

let adddata=(data)=>{
    let box = document.getElementById("items");
    box.innerHTML="";

    data.forEach(({id,image,category,title,brand,price})=>{
     
        let d =document.createElement("div");
        d.setAttribute("class", "item");

            let img = document.createElement("img");
            img.src =image;

            let cat = document.createElement("p");
            cat.innerHTML =category;
            
            let h3 = document.createElement("h3");
            h3.innerText =title;

            let bran = document.createElement("p");
            bran.innerText = `brand:- ${brand}`;

            let p2 = document.createElement("h3");
            p2.innerText = price;
            p2.setAttribute("class", "price");


            let btn = document.createElement("button");
            btn.innerText = "Remove";
            btn.setAttribute("class", "remove");
            btn.onclick = () => {
               remove(id);
            };

        d.append(img, cat, h3, bran , p2 , btn);
       
        box.append(d);
      
        
    });
      
   cart_count(data.length); 
};

window.onload=()=>{
    adddata(data);
  }
  


 
let remove=(id)=>{
  let data = JSON.parse(localStorage.getItem("cart"));
  let flag=false;
  data = data.filter((el) => {
    if(!flag)
    {
      flag=!(el.id !== id)
      return el.id !== id;
    }
    else
    {
      return true;
    }
    
  });

 localStorage.setItem("cart", JSON.stringify(data));
 adddata(data);
}