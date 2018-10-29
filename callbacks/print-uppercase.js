let getHTML = require( '../module-get-html' );

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function upper( text ) {
  // for ( let c of text ) {
    // let charCode = c.charCodeAt( 0 );
    // if ( charCode >= 65 && charCode <= 90 ) {
    //   out += charCode;
    // } else if (/\s/.test(c)) {
    //   out += c;
    // } else if ( charCode >= 97 && charCode <= 122 ) {
    //   // upper case alphabet detected
    //   out += String.fromCharCode( charCode - 32 );
    // }
  // }

  console.log(text.toUpperCase());
}


getHTML(requestOptions, upper);
