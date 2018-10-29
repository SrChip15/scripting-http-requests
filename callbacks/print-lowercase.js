let getHTML = require( '../module-get-html' );

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function lower( text ) {
  console.log(text.toLowerCase());
}

getHTML(requestOptions, lower);