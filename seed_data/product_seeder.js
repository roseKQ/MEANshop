var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    
new Product({
imagePath: 'https://gloimg.dresslily.com/L/pdm-product-pic/Clothing/2016/10/20/source-img/20161020173839_11735.jpg?a=6',
name: 'Almond Toe Court Shoes, Patent Black',
category: "Women's Footware",
price: 99,
quantity:5
}),
new Product({
imagePath: 'https://gloimg.dresslily.com/L/pdm-product-pic/Clothing/2016/10/20/source-img/20161020173839_11735.jpg?a=6',
name: 'Suede Shoes, Blue',
category: "Women's Footware",
price: 42,
quantity:4
}),
new Product({
imagePath: 'https://gloimg.dresslily.com/L/pdm-product-pic/Clothing/2016/10/20/source-img/20161020173839_11735.jpg?a=6',
name: 'Leather Driver Saddle Loafers, Tan',
category: "Men's Footware",
price: 34,
quantity:12
}),
new Product({
imagePath: 'https://gloimg.dresslily.com/L/pdm-product-pic/Clothing/2016/10/20/source-img/20161020173839_11735.jpg?a=6',
name: 'Flip Flops, Red',
category: "Men's Footware",
price: 19,
quantity:6
}),
new Product({
imagePath: 'https://gloimg.dresslily.com/L/pdm-product-pic/Clothing/2016/10/20/source-img/20161020173839_11735.jpg?a=6',
name: 'Flip Flops, Blue',
category: "Men's Footware",
price: 19,
quantity:0
}),
new Product({
imagePath: 'https://gloimg.dresslily.com/L/pdm-product-pic/Clothing/2016/10/20/source-img/20161020173839_11735.jpg?a=6',
name: 'Gold Button Cardigan, Black',
category: "Women's Casualwear",
price: 167,
quantity:6
}),
new Product({
imagePath: 'https://gloimg.dresslily.com/L/pdm-product-pic/Clothing/2016/10/20/source-img/20161020173839_11735.jpg?a=6',
name: 'Cotton Shorts, Medium Red',
category: "Women's Casualwear",
price: 30,
quantity:5
}),
new Product({
imagePath: 'https://gloimg.dresslily.com/L/pdm-product-pic/Clothing/2016/10/20/source-img/20161020173839_11735.jpg?a=6',
name: 'Fine Stripe Short Sleeve Shirt, Grey',
category: "Men's Casualwear",
price: 49.99,
quantity:9
}),
new Product({
imagePath: 'https://gloimg.dresslily.com/L/pdm-product-pic/Clothing/2016/10/20/source-img/20161020173839_11735.jpg?a=6',
name: 'Fine Stripe Short Sleeve Shirt, Green',
category: "Men's Casualwear",
price: 39.99,
quantity:3
}),
new Product({
imagePath: 'https://gloimg.dresslily.com/L/pdm-product-pic/Clothing/2016/10/20/source-img/20161020173839_11735.jpg?a=6',
name: 'SharkSkin Waistcoat, Charcoal',
category: "Men's Formalwear",
price: 75,
quantity:2
}),
new Product({
imagePath: 'https://gloimg.dresslily.com/L/pdm-product-pic/Clothing/2016/10/20/source-img/20161020173839_11735.jpg?a=6',
name: 'Lightweight Patch Pocket Blazer, Deer',
category: "Men's Formalwear",
price: 175.50,
quantity:1
}),
new Product({
imagePath: 'https://gloimg.dresslily.com/L/pdm-product-pic/Clothing/2016/10/20/source-img/20161020173839_11735.jpg?a=6',
name: 'Bird Print Dress, Black',
category: "Women's Formalwear",
price: 270,
quantity:10
}),
new Product({
imagePath: 'https://gloimg.dresslily.com/L/pdm-product-pic/Clothing/2016/10/20/source-img/20161020173839_11735.jpg?a=6',
name: 'Mid Twist Cut-Out Dress, Pink',
category: "Women's Formalwear",
price: 540,
quantity:5
})
];

var done = 0;

for (var i = 0; i < products.length; i++) {

    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}