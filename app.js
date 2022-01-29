var cartValue =document.getElementById("cart-value")
var cartButton=document.getElementById("cart")
var sugarfree1Add=document.getElementById("sugarfree1")
var sugarfree2Add=document.getElementById("sugarfree2")
var sugarfree3Add=document.getElementById("sugarfree3")
var sugarfree4Add=document.getElementById("sugarfree4")

var freshfruits1Add=document.getElementById("freshfruits1")
var freshfruits2Add=document.getElementById("freshfruits2")
var freshfruits3Add=document.getElementById("freshfruits3")
var freshfruits4Add=document.getElementById("freshfruits4")

var freshvegetables1Add=document.getElementById("freshvegetables1")
var freshvegetables2Add=document.getElementById("freshvegetables2")
var freshvegetables3Add=document.getElementById("freshvegetables3")
var freshvegetables4Add=document.getElementById("freshvegetables4")

console.log(sugarfree1Add)

var sugarfree1 = {
    name: "protien peanut butter",
    quantity: 0,
    dollars: 7,
    cents: 59,
};

var sugarfree2 = {
    name: "dark chocolate",
    quantity: 0,
    dollars: 4,
    cents: 59,
};

var sugarfree3 = {
    name: "slimming oil",
    quantity: 0,
    dollars: 6,
    cents: 80,
};

var sugarfree4 = {
    name: "sugar free",
    quantity: 0,
    dollars: 10,
    cents: 0,
};

var freshfruits1 = {
    name: "shrikhand",
    quantity: 0,
    dollars: 7,
    cents: 29,
};

var freshfruits2 = {
    name: "avacodo",
    quantity: 0,
    dollars: 4,
    cents: 99,
};

var freshfruits3 = {
    name: "litchi juice",
    quantity: 0,
    dollars: 17,
    cents: 49,
};

var freshfruits4 = {
    name: "kiwi",
    quantity: 0,
    dollars: 19,
    cents: 99,
};

var freshvegetables1 = {
    name: "potato",
    quantity: 0,
    dollars: 20,
    cents: 99,
};

var freshvegetables2 = {
    name: "tomato",
    quantity: 0,
    dollars: 19,
    cents: 49,
};

var freshvegetables3 = {
    name: "pumpkin",
    quantity: 0,
    dollars: 12,
    cents: 49,
};

var freshvegetables4 = {
    name: "carrots",
    quantity: 0,
    dollars: 19,
    cents: 9,
};

function updateCart() {
    cart = 
          sugarfree1.quantity +
          sugarfree2.quantity +
          sugarfree3.quantity +
          sugarfree4.quantity +
    freshfruits1.quantity +
    freshfruits2.quantity +
    freshfruits3.quantity +
    freshfruits4.quantity +
    freshvegetables1.quantity +
    freshvegetables2.quantity +
    freshvegetables3.quantity +
    freshvegetables4.quantity;
   cartValue.innerHTML = cart;
}

sugarfree1Add.onclick = (e) =>
 {
    sugarfree1.quantity++;
    updateCart();
};

sugarfree2Add.onclick = (e) => {
    sugarfree2.quantity++;
    updateCart();
};

sugarfree3Add.onclick = (e) => {
    sugarfree3.quantity++;
    updateCart();
};

sugarfree4Add.onclick = (e) => {
    sugarfree3.quantity++;
    updateCart();
};

freshfruits1Add.onclick = (e) => {
    freshfruits1.quantity++;
    updateCart();
};

freshfruits2Add.onclick = (e) => {
    freshfruits2.quantity++;
    updateCart();
};

freshfruits3Add.onclick = (e) => {
    freshfruits3.quantity++;
    updateCart();
};

freshfruits4Add.onclick = (e) => {
    freshfruits4.quantity++;
    updateCart();
};

/*freshvegetables1Add.onclick = (e) =>
 {
    freshvegetables1.quantity++;
    updateCart();
};
*/
freshvegetables2Add.onclick = (e) => {
    freshvegetables2.quantity++;
    updateCart();
};

freshvegetables3Add.onclick = (e) => {
    freshvegetables3.quantity++;
    updateCart();
};

freshvegetables4Add.onclick = (e) => {
    freshvegetables4.quantity++;
   updateCart();
};

var finalDollars=0;
var finalcents=0;
function updatePrice () {

  var sugarfree1CostInCents =
  sugarfree1.quantity * sugarfree1.dollars * 100+ sugarfree1.quantity * sugarfree1.cents;
  var sugarfree2CostInCents =
  sugarfree2.quantity * sugarfree2.dollars * 100+ sugarfree2.quantity * sugarfree2.cents;
  var sugarfree3CostInCents =
  sugarfree3.quantity * sugarfree3.dollars * 100+ sugarfree3.quantity * sugarfree3.cents;
  var sugarfree4CostInCents =
  sugarfree4.quantity * sugarfree4.dollars * 100+ sugarfree4.quantity * sugarfree4.cents;
  
   
  var freshfruits1CostInCents =
  freshfruits1.quantity *  freshfruits1.dollars * 100+  freshfruits1.quantity * freshfruits1.cents;
  var freshfruits2CostInCents =
  freshfruits2.quantity *  freshfruits2.dollars * 100+  freshfruits2.quantity * freshfruits2.cents;
  var freshfruits3CostInCents =
  freshfruits3.quantity *  freshfruits3.dollars * 100+  freshfruits3.quantity * freshfruits3.cents;
  var freshfruits4CostInCents =
  freshfruits4.quantity *  freshfruits4.dollars * 100+  freshfruits4.quantity * freshfruits4.cents;

  var freshvegetables1CostInCents =
  freshvegetables1.quantity * freshvegetables1.dollars * 100+ freshvegetables1.quantity * freshvegetables1.cents;
  var freshvegetables2CostInCents =
  freshvegetables2.quantity * freshvegetables2.dollars * 100+ freshvegetables2.quantity * freshvegetables2.cents;
  var freshvegetables3CostInCents =
  freshvegetables3.quantity * freshvegetables3.dollars * 100+ freshvegetables3.quantity * freshvegetables3.cents;
  var freshvegetables4CostInCents =
  freshvegetables4.quantity * freshvegetables4.dollars * 100+ freshvegetables4.quantity * freshvegetables4.cents;

  totalPriceInCents =
  sugarfree1CostInCents +
  sugarfree2CostInCents +
  sugarfree3CostInCents +
  sugarfree4CostInCents +
  freshfruits1CostInCents +
  freshfruits2CostInCents +
  freshfruits3CostInCents +
  freshfruits4CostInCents +
  freshvegetables1CostInCents +
  freshvegetables2CostInCents +
  freshvegetables3CostInCents +
  freshvegetables4CostInCents;
  finalDollars = Math.floor (totalPriceInCents / 100);
  finalcents=totalPriceInCents%100;
}
var whatsappLink= "https://api.whatsapp.com/send?phone=919000690676&text=Order%20details";
function updatewhatsappLink()
    {
        if (sugarfree1.quantity !=0) 
        {
            whatsappLink +="%0A" +sugarfree1.name + "%20" + sugarfree1.quantity;

        }
        if (sugarfree2.quantity !=0) 
        {
            whatsappLink +="%0A" +sugarfree2.name + "%20" + sugarfree2.quantity;

        }
        if (sugarfree3.quantity !=0) 
        {
            whatsappLink +="%0A" +sugarfree3.name + "%20" + sugarfree3.quantity;

        }
        if (sugarfree4.quantity !=0) 
        {
            whatsappLink +="%0A" +sugarfree4.name + "%20" + sugarfree4.quantity;

        }
             if ( freshfruits1.quantity !=0) 
        {
            whatsappLink +="%0A" + freshfruits1.name + "%20" +  freshfruits1.quantity;

        }
        if ( freshfruits2.quantity !=0) 
        {
            whatsappLink +="%0A" +freshfruits2.name + "%20" + freshfruits2.quantity;

        }
        if (freshfruits3.quantity !=0) 
        {
            whatsappLink +="%0A" +freshfruits3.name + "%20" + freshfruits3.quantity;

        }
        if (freshfruits4.quantity !=0) 
        {
            whatsappLink +="%0A" +freshfruits4.name + "%20" + freshfruits4.quantity;

        }
        if (freshvegetables1.quantity !=0) 
        {
            whatsappLink +="%0A" +freshvegetables1.name + "%20" + freshvegetables1.quantity;

        }
        if (freshvegetables2.quantity !=0) 
        {
            whatsappLink +="%0A" +freshvegetables2.name + "%20" + freshvegetables2.quantity;

        }
        if (freshvegetables3.quantity !=0) 
        {
            whatsappLink +="%0A" +freshvegetables3.name + "%20" + freshvegetables3.quantity;

        }
        if (freshvegetables4.quantity !=0) 
        {
            whatsappLink +="%0A" +freshvegetables4.name + "%20" + freshvegetables4.quantity;

        }
        whatsappLink += "%0A" + "Total%20Price:%20$" + finalDollars + "%20" + finalcents + "c";
    }
cartButton.onclick = () => {
    updatePrice();
    updatewhatsappLink();
    window.open(whatsappLink,"_blank");
};




