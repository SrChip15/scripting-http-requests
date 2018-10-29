function getAndPrintHTML() {
  const https = require( 'https' );
  let bufferedHTML = '';

  let requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get( requestOptions, function ( response ) {
    response.setEncoding( 'utf8' );

    // the callback is invoked when a `data` chunk is received
    response.on( 'data', function ( stream ) {
      bufferedHTML += stream;
    } );

    response.on( 'end', function () {
      console.log( 'Response stream complete.' );
      console.log(bufferedHTML);s
    } );
  } );

}

console.log(getAndPrintHTML());
