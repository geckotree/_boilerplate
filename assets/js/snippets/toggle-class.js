// ===========================================================
//
//	$TOGGLE CLASS
//	To use <button data-toggle="nav--main">
//
// ===========================================================

var toggleClass = function(el, className) {
    if(el.hasClass(className + '--open')) {
      el.removeClass(className + '--open');
    } else {
      el.addClass(className + '--open');
    }
}

$('[data-toggle]').on( "click", function() {
  var $className = $( this ).data("toggle");
  toggleClass($('html'), $className);
});