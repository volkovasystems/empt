"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "empt",
			"path": "empt/empt.js",
			"file": "empt.js",
			"module": "empt",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/empt.git",
			"test": "empt-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Check if object has no enumerable properties.
	@end-module-documentation

	@include:
		{
			"doubt": "doubt"
		}
	@end-include
*/

if( typeof window == "undefined" ){
	var doubt = require( "doubt" );
}

if( typeof window != "undefined" &&
	!( "doubt" in window ) )
{
	throw new Error( "doubt is not defined" );
}

var empt = function empt( object ){
	/*;
		@meta-configuration:
			{
				"object:required": "object"
			}
		@end-meta-configuration
	*/

	if( doubt( object ).AS_ARRAY ){
		throw new Error( "invalid object" );
	}

	if( typeof object != "object" ){
		throw new Error( "invalid object" );
	}

	return ( object === null ||

		( typeof object == "object" &&

		object !== null &&

		Object.keys( object ).length == 0 &&

		JSON.stringify( object ) == JSON.stringify( { } ) &&

		Object.getOwnPropertyNames( object )
			.filter( function onEachProperty( property ){
				let descriptor = Object.getOwnPropertyDescriptor( object, property ) || { };

				return !!descriptor.enumerable;
			} ).length == 0 ) );
};

if( typeof module != "undefined" ){
	module.exports = empt;
}
