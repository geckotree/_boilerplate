define( function( require ) {
	if( 'querySelector' in document &&
		'localStorage' in window &&
		'addEventListener' in window ) {

		var Toggle = require( 'lib/toggle' );
		var $html = document.querySelector( 'html' );
		var $toggle = document.querySelectorAll( '[data-toggle]' );

		$html.classList.remove( 'no-mustard' );
		$html.classList.add( 'mustard' );

		for( var i in $toggle ) {
			if( $toggle[i].nodeType == 1 ) {
				new Toggle( $toggle[i] );
			}
		}

	}
});
