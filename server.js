const express  = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(express.json());

const products= [
    {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
   
   
    },
    {
    "id": 2,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",
   
    },
    {
    "id": 3,
    "title": "Samsung Universe 9",
    "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
    "price": 1249,
    "discountPercentage": 15.46,
    "rating": 4.09,
    "stock": 36,
    "brand": "Samsung",
    "category": "smartphones",

    },
]

// Middleware function for  logging timestamp with the HTTP method and url   

app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp} - ${req.method} ${req.url}`);
    next();
  });
  

  
// GET All products
app.get('/api/products', (req, res) => {
    res.json(products);
  });
// GET single Product
app.get('/api/product/:id',(req,res)=>{
    const productId = parseInt(req.params.id);
   
 
    //using .filter function we loop through array and get the product that has id equals to requisted id
  const findProduct = products.find((p) => p.id === productId);
  if (!findProduct) {
    return next(new ErrorHander("Product not found", 404));
  }
  res.status(200).json(findProduct);
});


//post requiest create product

app.post("/api/products", (req, res) => {
    //get product details frome req.body and stored in variable
    const addproduct = req.body;
    // variable pushed in to the products array
    products.push(addproduct);
  
    res.status(201).send(addproduct);
  });


  // update the data
app.put("/api/product/:id", (req, res) => {
    //got id from req.params 
  const id = parseInt(req.params.id);
  //got details to update from req.body object
  const updatedproduct = req.body;
 
  /// for getting index of the element that has similar id to id get from req.params
    /// using .findindex() we iterate through array and return the id match index 
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products[index] = updatedproduct;
    res.json(updatedproduct);
  } else {
    res.sendStatus(404);
  }
});
//delete product
app.delete("/api/product/:id", (req, res) => {
    const Id = parseInt(req.params.id);
  
    const index = products.findIndex((product) => product.id === Id);
    if (index !== -1) {
      const deletedproduct = products.splice(index, 1);
      res.json(deletedproduct[0]);
    } else {
      res.sendStatus(404);
    }
  });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });