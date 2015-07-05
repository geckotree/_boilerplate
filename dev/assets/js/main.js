( function() {
	'use strict';

	//@todo add in fastclick functionality

	if( 'visibilityState' in document ) {

		var Toggle = window.Toggle;

		var $html = document.querySelector( 'html' );
		var $toggle = document.querySelectorAll( '.js-toggle' );

		$html.classList.remove( 'no-enhance' );
		$html.classList.add( 'enhance' );

		if( $toggle.length ) {
			Array.prototype.forEach.call( $toggle, function( el ) {
				new Toggle( el );
			});
		}

	}
})();
