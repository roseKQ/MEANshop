module.exports = function Cart(oldCart) {
this.items = oldCart.items || {};
this.totalQty = oldCart.totalQty || 0;
this.totalPrice = oldCart.totalPrice || 0;
//this.discount = oldCart.discount || "";

this.add = function (item, id) {

var storedItem = this.items[id]
if(!storedItem){
    storedItem = this.items[id] = {item: item, qty: 0, price: 0};
}
storedItem.qty++;
storedItem.price = storedItem.item.price* storedItem.qty;
this.totalQty++;
this.totalPrice +=storedItem.item.price;

};

//the apply discount is proving tricky in handlebars - will follow up but for now it is not functional

/*
if(discount!=null){
    if(discount==="FIVE"){
        this.totalPrice-5;
    }else if (discount==="TEN" && this.totalPrice>50){
this.totalPrice - 10;
    }else if (discount==="FIFTEEN" && this.totalPrice>75){
        this.totalPrice - 15;
    }
};*/

this.reduceByOne = function(id) {
    this.items[id].qty--;
    this.items[id].price -= this.items[id].item.price;
    this.totalQty--;
    this.totalPrice -= this.items[id].item.price;

    if(this.items[id].qty <= 0) {
        delete this.items[id];
    }

};

this.generateArray = function() {

var arr = [];

for (var id in this.items){

    arr.push(this.items[id]);
}
return arr;
};

}