// load express
const express = require('express');
// load handlebars
const exphbs = require('express-handlebars');

// instantiate express
const app = express();

// configure express to use handlebars as templating engine
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    // use this layout by default - if you have different layout
    // for say home page - you can toggle this in your code
    defaultLayout: 'default',
    // set location of layouts
    layoutsDir: 'views/layouts',
    // set location of partials - header, footer, etc
    partialsDir: 'views/partials',
  })
);
// set the view engine to handlesbards
app.set('view engine', 'hbs');
// where to find all of the view
app.set('views',  'views');
// where to find static files - css, images, js
app.use(express.static('public'));

// home page or home route
app.get('/', (req, res) => {

  // set active for navigation
  state={home:true}
  // set specifics for <head>
  head={title: "Home", description:"This is the home page of the website", keywords: "animal rescue, rescue, dog, kitten, fundraiser, shop"}
  // pass object to to render in "index"
  res.render('index', {state:state, head:head});
  // send this to terminal where node app is running
  console.log('home')

});

 app.get('/about', (req, res) => {
    state={about : true}
    head={title:"About Us", description:"This is the about page of the website", keywords: "animal rescue, history, rescue, vet, volunteer"}
    res.render('about', { state:state, head:head});
    console.log('about')
  });

  //shop route
  app.get('/shop', (req, res) => {
    state={shop : true}
    head={title:"Shop", description:"This is the website shop", keywords: "lead, tag, dog food, cat scratching post, dog toy, cat toy"}
    res.render('shop', { state:state, head:head});
    console.log('shop')
  });

  app.get('/login', (req, res) => {
    state={login : true}
    head={title:"Login", description:"This is the website login page", keywords: "username, password, login, register"}
    res.render('login', { state:state, head:head});
    console.log('login')
  });

  app.get('/register', (req, res) => {
    state={register : true}
    head={title:"Register", description:"This is the website register page", keywords: "username, password, register"}
    res.render('register', { state:state, head:head});
    console.log('register')
  });

  app.get('/forgotPassword', (req, res) => {
    state={forgotPassword : true}
    head={title:"Forgot Password", description:"This is the forgot password page", keywords: "username, password, code"}
    res.render('forgotPassword', { state:state, head:head});
    console.log('forgotPassword')
  });

   app.get('/checkout', (req, res) => {
    state={checkout : true}
    head={title:"Checkout", description:"This is the website checkout page", keywords: "username, password, basket, total, buy, delivery, payment"}
    res.render('checkout', { state:state, head:head});
    console.log('checkout')
  });

  app.get('/contact', (req, res) => {
    state={contact : true}
    head={title:"Contact US", description:"This is the contact us page of the website", keywords: "animal rescue, address, opening hours, phone, email, social media, volunteers"}
    res.render('contact', { state:state, head:head});
    console.log('contact')
  });

  app.get('/userDetails', (req, res) => {
    state={userDetails : true}
    head={title:"User Details", description:"This is the user details page", keywords: "name, last name, address, details"}
    res.render('userDetails', { state:state, head:head});
    console.log('userDetails')
  });

  app.get('/registerSubmission', (req, res) => {
    formDetails = {email:req.query.email, password:req.query.password, reenterpassword:req.query.reenterpassword}
    res.render('registerSubmission', {state,formDetails});

  });

  app.get('/checkoutSubmission', (req, res) => {
    formDetails = {email:req.query.email, firstName:req.query.firstName, lastName:req.query.lastName, address1:req.query.address1, address2:req.query.address2, address3:req.query.address3, cardName:req.query.cName, cardNumber:req.query.cNumber, CVV:req.query.CVV}
    res.render('checkoutSubmission', {state,formDetails});

  });

   app.get('/newPasswordSubmission', (req, res) => {
    formDetails = {email:req.query.email, code:req.query.code, password:req.query.password, reenterpassword:req.query.reenterpassword}
    res.render('newPasswordSubmission', {state,formDetails});

  });

  app.get('/orderDetails', (req, res) => {
    formDetails = {email:req.query.getEmail, firstname:req.query.firstname, lastname:req.query.lastname, address1:req.query.address1, address2:req.query.address2, address3:req.query.address3}
    res.render('orderDetails', {state,formDetails});

  });
// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});