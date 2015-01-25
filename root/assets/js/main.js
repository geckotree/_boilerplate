define( function( require ) {
	'use strict';

	if( 'querySelector' in document &&
		'localStorage' in window &&
		'addEventListener' in window ) {

		var Toggle = require( 'plugins/toggle' );
		var Carousel = require( 'plugins/carousel' );

		var $html = document.querySelector( 'html' );
		var $toggle = document.querySelectorAll( '[data-toggle]' );
		var $carousel = document.querySelectorAll( '.js-carousel' );

		$html.classList.remove( 'no-mustard' );
		$html.classList.add( 'mustard' );

		if( $toggle.length ) {
			for( var i in $toggle ) {
				if( $toggle[ i ].nodeType == 1 ) {
					new Toggle( $toggle[ i ] );
				}
			}
		}

		if( $carousel.length ) {
			for( var x in $carousel ) {
				if( $carousel[ x ].nodeType == 1 ) {
					new Carousel( $carousel[ x ] );
				}
			}
		}

	}
});
