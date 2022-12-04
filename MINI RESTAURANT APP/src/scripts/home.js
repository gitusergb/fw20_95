
//https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products

import {navbar} from "./navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML=navbar();

let url ="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products";
let page=1;

let getdata=async(page)=>{
    let res = await fetch(`${url}?page=${page}`);
    let data = await res.json();
   console.log("data :" ,data.data);
    adddata(data.data,page);

};

window.onload=()=>{
  

  page=1;
  getdata(page);
}





let adddata=(data,page)=>{
    let box = document.getElementById("main_items");
    box.innerHTML="";

    data.forEach((e)=>{
     
        let d =document.createElement("div");
        d.setAttribute("class", "item");

            let img = document.createElement("img");
            img.src =e.image;

            let cat = document.createElement("p");
            cat.innerHTML =e.category;
            
            let h3 = document.createElement("h3");
            h3.innerText =e.title;

            let bran = document.createElement("p");
            bran.innerText = `brand:- ${e.brand}`;

            let p2 = document.createElement("h3");
            p2.innerText = e.price;
            p2.setAttribute("class", "price");


            let btn = document.createElement("button");
            btn.innerText = "Add to Cart";
            btn.setAttribute("class", "add_to_cart");
            btn.onclick = () => {
               
                addToCart(e);
            };

        d.append(img, cat, h3, bran , p2 , btn);
       
        box.append(d);
      
        
    });

    localStorage.setItem("store", JSON.stringify(data))||[];

   cart_count(data.length); 
    let page_no = document.getElementById("page_number");
    page_no.innerHTML=`${page}`;
   


    let btn1= document.getElementById('previous');
    btn1.onclick=()=>{
       previous(page);
      
    };
    
    
    let btn2= document.getElementById('next');
    btn2.onclick=()=>{
      next(page);
    
    
    };

if(page===1){
  btn1.disabled=true;
}
else{
  btn1.disabled=false;
}

if(page===data.length){
  btn2.disabled=true;
}
else{
  btn2.disabled=false;
}


let high= document.getElementById("sort-lth");
high.onclick=()=>{
    sorthigh(page);
};

let low= document.getElementById("sort-htl");
low.onclick=()=>{
    sortlow(page);
}




};


/*
 */

let previous=(page)=>{
    if(page==1){
      return;  
    }page--;
    getdata(page);;
    };

    let next=(page)=>{
        if(page==5){
            return;  
          }page++;
          
          getdata(page);
          
           
        };

/*
 */

        let addToCart=(e)=> {
            let data = JSON.parse(localStorage.getItem("cart")) || [];
         
            data.push(e);
           localStorage.setItem("cart", JSON.stringify(data));
            cart_count(data.length);
          }
         let cart_count=(i)=> {  
             let c = document.getElementById("cart_count");
            c.innerText = i;
          }
         

/*
 */


let sorthigh=(page)=>{
  let data = JSON.parse(localStorage.getItem("store")) || [];
  document.querySelector("#main_items").innerText=null;
  data.sort(function(a,b){
  if(a.price > b.price ) return 1;
  if(a.price < b.price ) return -1;
  return 0;
},console.log(data));
adddata(data,page);
}

let sortlow =(page)=>{
  let data = JSON.parse(localStorage.getItem("store")) || [];
  document.querySelector("#main_items").innerText=null;
  data.sort(function(a,b){
  if(a.price> b.price) return -1;
  if(a.price < b.price ) return 1;
  return 0;
},console.log(data));
adddata(data,page);
}


