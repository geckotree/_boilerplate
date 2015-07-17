( function() {
	'use strict';

	if( 'visibilityState' in document ) {
		var Toggle = window.Toggle;

		//@todo add in fastclick functionality

		var $node;
		var moduleName;
		var $html = document.querySelector( 'html' );
		var $nodes = document.querySelectorAll( '[data-module]' );

		$html.classList.remove( 'no-enhance' );
		$html.classList.add( 'enhance' );

		for( var i = 0; i < $nodes.length; i++ ) {
			$node = $nodes[ i ];
			moduleName = $node.getAttribute( 'data-module' );
			new window[moduleName]( $node );
		}
	}
})();
