// Export navbar from here
function navbar (){
    return `
    <a id="home" href="./home.html"><h3>HOME</h3></a>
    <a id="cart" href="./cart.html"><h3>CART</h3></a>
    <a href="./checkout.html"><h3>CHECKOUT/ORDER</h3></a>
    <a href="./index.html"><h3>SIGNUP/LOGIN</h3></a>
    <div id="cart_count">   </div>
 `
};

export {navbar};
