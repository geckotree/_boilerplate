document.addEventListener('DOMContentLoaded', function() {
	var html = document.querySelector('html');
	var	body = document.querySelector('body');
//	var	navHeight = document.getElementById('pageHeader').offsetHeight;
	var	lastScroll = 0;
/*
	var sideContent = document.getElementById('sideContent');
	var sideContentInner = document.getElementById('sideContentInner');
	var sideContentTop = document.getElementById('sideContent').offsetTop;
	var sideContentWidth = document.getElementById('sideContent').offsetWidth;
*/
	//=helper: hasClass
	Element.prototype.hasClass = function (className) {
	    return new RegExp(' ' + className + ' ').test(' ' + this.className + ' ');
	};

	//=helper: addClass
	Element.prototype.addClass = function (className) {
	    if (!this.hasClass(className)) {
	        this.className += ' ' + className;
	    }
	};

	//=helper: removeClass
	Element.prototype.removeClass = function (className) {
	    var newClass = ' ' + this.className.replace(/[\t\r\n]/g, ' ') + ' ';
	    if (this.hasClass(className)) {
	        while (newClass.indexOf( ' ' + className + ' ') >= 0) {
	            newClass = newClass.replace(' ' + className + ' ', ' ');
	        }
	        this.className = newClass.replace(/^\s+|\s+$/g, ' ');
	    }
	};

	//=helper: toogleClass
	var toggleClass = function (el, className) {
	    if(el.hasClass(className + '-open')) {
			el.removeClass(className + '-open');
		} else {
			el.addClass(className + '-open');
	    }
	}

	window.onload = function() {
		html.removeClass('preload');
	};

	// toggle via data attr
	var dataToggle = document.querySelectorAll('[data-toggle]');

	for (var i in dataToggle) {
		if (dataToggle[i].nodeType == 1) dataToggle[i].addEventListener('click', function(event) {
			var $class = this.getAttribute( "data-toggle" );
			toggleClass(html, $class);
		});
	}

/*
	window.onscroll = function(e) {
		//=Sets the current scroll top position
		var scrollTop = document.body.scrollTop;

		//=Detach sidebar when reaches top of page
		if (window.matchMedia('(min-width: 1000px)').matches) {
			if(scrollTop > sideContentTop) {
				html.addClass('side-content-detached');
				sideContentInner.style.width = sideContentWidth + 'px';
			} else {
				html.removeClass('side-content-detached');
			}
		}

		//=Detach nav and make it fixed to top of the page
		if(scrollTop > 400) {
			html.classList.add('nav-detached');
			body.style.paddingTop = navHeight + 'px';
		}
		//=Remove fixed position of nav when reaches top of the page
		if(scrollTop < 1) {
			html.classList.remove('nav-detached');
			body.style.paddingTop = '0px';
		}

		//=Determines up or down scrolling and only hide nav if scroll position is greater than height of nav
		if(scrollTop > lastScroll && lastScroll > navHeight) {
			html.classList.add('nav-hidden');
		} else {
			html.classList.remove('nav-hidden');
		}

		//=Updates scroll position
		lastScroll = scrollTop;
	}
*/	
}, false);