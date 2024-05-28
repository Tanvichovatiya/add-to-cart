let arrproducts=[
    {
        id:1,
        name:"HTML",
        image:"1html.png",
        price:"1000",
        rating:5,

    },
    {
        id:2,
        name:"css",
        image:"2css.jpeg",
        price:"2000",
        rating:4,

    }, 
     {
        id:3,
        name:"Javascript",
        image:"3js.png",
        price:"3000",
        rating:2,

    }, 
     {
        id:4,
        name:"Jquery",
        image:"4jquery.png",
        price:"1500",
        rating:4,

    }, 
     {
        id:5,
        name:"React",
        image:"5react.png",
        price:"4000",
        rating:5,

    }, 
     {
        id:6,
        name:"bootstrap",
        image:"6bootdtrap.jpeg",
        price:"500",
        rating:3,

    },
]
const body=document.querySelector("body");
let products=document.querySelector(".products");
let shoppingbasket=document.querySelector(" header .shoppingbasket");
let closecart=document.querySelector(".close");
let productlist=document.querySelector(".productlist");
let quantity=document.querySelector(".quantity");
let total=document.querySelector(".total");
let checkoutlist=[];

shoppingbasket.onclick=()=>{
    body.classList.add("active");
}
closecart.onclick=()=>{
    body.classList.remove("active");
}
function oninit(){
    arrproducts.forEach((item,key)=>{
       let div=document.createElement("div");
       div.classList.add("item");
    //    console.log(key);
    let star="";
    for(i=0;i<item.rating;i++){
        star+=`<i class="fa fa-star"></i>`
    }

       div.innerHTML=`
       <img src="img/${item.image}" />
       <div class="name">${item.name}</div>
        <div class="price"><small>rupees.</small>${item.price}</div>
        <div>${star}</div>
        <button onclick="addtocart(${key})"><i class="fa fa-cart-plus"></i>Add To Cart</button>`;
       products.appendChild(div);
    });
}
oninit();


function addtocart(id){
    
if(checkoutlist[id]==null){
    checkoutlist[id]=arrproducts[id];
    checkoutlist[id].quantity=1;
}
 else{
    checkoutlist[id].quantity+=1;
}
reloadcart();
}


function reloadcart(){
    productlist.innerHTML="";
let count=0;
let totalprice=0;

    
checkoutlist.forEach((item,key)=>{
    totalprice+=(item.price);
    count+=item.quantity;
    // console.log(item);
    let li=document.createElement("li");
    li.innerHTML=`
    <img src="img/${item.image}">
    <div>${item.name}</div>
    <div >${item.price}</div>
    <div>
    <button onclick="changequantity(${key},${item.quantity-1})">-</button>
    <div class="count">${item.quantity}</div>
    <button onclick="changequantity(${key},${item.quantity+1})">+</button>
    </div>`;
    productlist.appendChild(li);
});
total.innerHTML=`<small>Subtotal(${count} items)rup.</small>`+totalprice;
quantity.innerHTML=count;
}

function changequantity(key,quantity){
    if(quantity==0){
        delete checkoutlist[key];
    }
    else{
        checkoutlist[key].quantity=quantity;
    }
    reloadcart();
}