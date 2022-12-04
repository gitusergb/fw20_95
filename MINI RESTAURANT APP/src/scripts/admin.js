
import {navbar} from "./navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML=navbar();




// Menus Section
//Cathing Menus Div
let menus_div = document.getElementById("admin_menus");

//Get Mens Products
const get_menus = async () => {

    const response = await fetch ('https://mock-server-01of.onrender.com/Menu');

    let data = await response.json();
console.log("menu:",data);

    append_menus(menus_div,data);

}

get_menus();

// Menus Append Function
const append_menus = (container,data) => {

    container.innerHTML = ""

    data.forEach( (el) => {

        let card = document.createElement("div");
        
        let id = document.createElement("id");
        id.innerText=e.index;


            let card_image = document.createElement("img");
            card_image.src = el.Image;

            let card_name = document.createElement("p");
            card_name.innerText = "Name:" + el.Title;

            let card_Description = document.createElement("p");
            card_Description.innerText = "Description:" + el.Description;

            let card_price = document.createElement("p");
            card_price.innerText = "Price:" + "$" + el.Price;

            let card_Ratings = document.createElement("p");
            card_Ratings.innerText = "Ratings:" + el.Ratings;

            let card_update_btn = document.createElement("button");
            card_update_btn.innerText = "Update";
            card_update_btn.className = "update_MenusPage";

            card_update_btn.onclick = () => {

                updatePrice_menusPage(el.id);

            }

            let card_delete_btn = document.createElement("button");
            card_delete_btn.innerText = "Delete";
            card_delete_btn.className = "delete_MenusPage";

            card_delete_btn.onclick = () => {

                deleteFrom_mensPage(el.id);
                addtoTrash(el)

            }

            let hr = document.createElement("hr");

            card.append(card_image,card_name, card_Description, card_price, card_Ratings, card_update_btn, card_delete_btn, hr);
        
        container.append(card);


    } )

}


//Add to Mens Page section
// catched add to Mens Button 
let addTo_MensPage_btn = document.getElementById("addTo_menusPage");

addTo_MensPage_btn.onclick = () => {

    addTo_MenusPage();

}

//Catched values from input and adding to server
const addTo_MenusPage = async () => {
        
    let product_id = document.getElementById("product_id").value;

    let product_image = document.getElementById("product_image").value;

    let product_name = document.getElementById("product_name").value;

    let product_description = document.getElementById("product_Description").value;

    let product_price = document.getElementById("product_price").value;

    let product_ratings = document.getElementById("product_Ratings").value;

    if( product_id == "" || product_image == "" || product_name == "" || product_description == "" || product_price == ""||product_ratings==""){

        alert("Please fill all the details");

    }else {

    let send_this_data = {

        "id": product_id,
        "image": product_image,
        "name": product_name,
        "desc": product_description,
        "price": product_price,
        "rating": product_ratings

    }

    let response = await fetch ('https://attractive-songs-1315.herokuapp.com/menspage' ,{

        method:'POST',
        body:JSON.stringify(send_this_data),

        headers: {

            'Content-Type':'application/json',

        },

    });

    let data = await response.json();

    console.log(data);

    get_menus();

    }

}

    // Delete Products in Menus Page
    const deleteFrom_mensPage = async (id) => {

        // console.log(id);

        let response = await fetch (`https://attractive-songs-1315.herokuapp.com/menspage/${id}` ,{

            method:'DELETE',

            headers: {

                'Content-Type':'application/json',

            },

        });

        let data = await response.json();

        console.log(id,"Deleted",data);

        get_mens();

    }

    //Update Price
    const updatePrice_menusPage = async (id) => {

        const newPrice = prompt ('Enter New Price')

        let send_this_data = {

            "price":+(newPrice)

        }

        let response = await fetch (`https://attractive-songs-1315.herokuapp.com/menspage/${id}` ,{

            method:'PATCH',
            body:JSON.stringify(send_this_data),

            headers: {

                'Content-Type':'application/json',

            },

        });

        let data = await response.json();

        console.log(id,":Price Updated",data);

        get_menus();

    } 


