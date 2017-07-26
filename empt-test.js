const assert = require( "assert" );
const empt = require( "./empt.js" );

assert.equal( empt( { } ), true, "should be equal to true" );

assert.equal( empt( { "name": "simple" } ), false, "should be equal to false" );

console.log( "ok" );
