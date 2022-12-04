
import {navbar} from "./navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML=navbar();



let data = JSON.parse(localStorage.getItem("cart")) || [];

let cart_count=(i)=> {  
    let c = document.getElementById("cart_count");
                c.innerText = i;
     }
         
     

let adddata=(data)=>{

 // console.log(data);
    let box = document.getElementById("items");
    box.innerHTML="";

    data.forEach((el)=>{
  
        let d =document.createElement("div");
        d.setAttribute("class", "item");

            let img = document.createElement("img");
            img.src=el.Image;
            
            let h3 = document.createElement("h3");
            h3.innerText=el.Title;

            let des = document.createElement("p");
            des.innerHTML =el.Description;

            let p2 = document.createElement("h3");
            p2.innerText = el.Price;
            p2.setAttribute("class", "price");

            let rate = document.createElement("p");
            rate.innerText = `Ratings:- ${el.Ratings}`;

            let btn = document.createElement("button");
            btn.innerText = "Remove";
            btn.setAttribute("class", "remove");
            btn.onclick = () => {
               remove(el.id);
            };

        d.append(img,h3, des, p2 ,rate , btn);
       
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