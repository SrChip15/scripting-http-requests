module.exports = function getHTML( options, callback ) {
  const https = require( 'https' );

  const { host:host, path:path } = options;

  const requestOptions = {
    'host': host,
    'path': path
  };

  let bufferedHTML = '';

  https.get( requestOptions, function ( response ) {
    response.setEncoding( 'utf8' );
    // the callback is invoked when a `data` chunk is received
    response.on( 'data', function ( stream ) {
      bufferedHTML += stream;
    } );

    response.on( 'end', function () {
      console.log( 'Response stream complete.' );
      callback(bufferedHTML);
    } );

  } );
};

