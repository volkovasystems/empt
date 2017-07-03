const assert = require( "assert" );
const empt = require( "./empt.js" );

assert.equal( empt( { } ), true, "should be true" );

assert.equal( empt( { "name": "simple" } ), false, "should be false" );

console.log( "ok" );
