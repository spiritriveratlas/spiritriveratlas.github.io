jQuery(document).ready(function($) {

	jQuery("#hamburger").on("click",function(e) {
		e.preventDefault();
		jQuery( this ).toggleClass('actief');
		jQuery('#hetmenu').slideToggle('actief');
	});


});
