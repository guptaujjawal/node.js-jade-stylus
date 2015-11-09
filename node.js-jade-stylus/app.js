var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
  , morgan = require('morgan');

var app = express();
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(morgan('dev')) // simply log incoming requests to the console
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
)) //compile our .styl files to CSS. In order to use nib, we pass in a custom compile function to the Stylus middleware. 
app.use(express.static(__dirname + '/public')) 
//Express static middleware, which is used for serving static files,our static files will live in a folder called 'public'
//Unlike Apache, the Express server doesn't mimic the filesystem to the visitor. This allows great flexibility for the url structure of your site, 
//but it's quite a useful feature for serving static assets, 
//so the static middleware does exactly this on the directory that we pass. 
//A file 'pic.jpg' in a folder 'images' within 'public' will be available to the client at '/images/pic.jpg'.

app.get('/', function (req, res) { //a function which takes the request and response object, and sends the plain-text response 'Hi there!'
  res.render('index', //res.render() is provided by Express and takes the name of the view to render, 
  					//followed by an object whose properties the view will have access to (the properties of this object are sometimes known as 'locals').
  { title : 'Home' }
  )
})
app.listen(3000) //telling the Express application to listen on port 3000