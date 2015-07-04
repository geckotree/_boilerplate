( function() {
	'use strict';

	if( 'visibilityState' in document ) {

		var Toggle = window.Toggle;

		var $html = document.querySelector( 'html' );
		var $toggle = document.querySelectorAll( '.js-toggle' );

		$html.classList.remove( 'no-mustard' );
		$html.classList.add( 'mustard' );

		if( $toggle.length ) {
			Array.prototype.forEach.call( $toggle, function( el ) {
				new Toggle( el );
			});
		}

	}
})();
