let getHTML = require('../module-get-html');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function rev(text) {
  console.log(text.split('').reverse().join(''));
}

getHTML(requestOptions, rev);
