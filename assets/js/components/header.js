define( function() {
	'use strict';

	var Header = function() {
		this._$html = document.querySelector( 'html' );
		this._$body = document.querySelector( 'body' );
		this._navHeight = document.getElementById( 'pageHeader' ).offsetHeight;
		this._lastScroll = 0;

		this._stickyHeader();
	};

	Header.prototype = {
		_stickyHeader: function() {
			var _this = this;

			window.onscroll = function( e ) {
				// Sets current scroll top position
				var _scrollTop = document.body.scrollTop;

				// Detach nav
				if( _scrollTop > 400 ) {
					_this._$html.classList.add( 'is-detached' );
					_this._$body.style.paddingTop = _this._navHeight + 'px';
				}

				// Attach nav
				if( _scrollTop < 1 ) {
					_this._$html.classList.remove( 'nav-detached' );
					_this._$body.style.paddingTop = '0px';
				}

				// Hide/show nav
				if( _scrollTop > _this._lastScroll && _this._lastScroll > _this._navHeight ) {
					_this._$html.classList.add( 'nav-hidden' );
				} else {
					_this._$html.classList.remove( 'nav-hidden' );
				}

				// Update scroll position
				_this._lastScroll = _scrollTop;
			};
		}
	};

	return Header;
});
