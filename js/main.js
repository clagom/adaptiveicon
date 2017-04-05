$(document).ready(function () {	
	
	$(document).on('click', '.showgrid', function(){
	  $(".hidegrid").show();
	  $("#grid").fadeIn();
	  $(this).hide();
	});
	
	$(document).on('click', '.hidegrid', function(){
	  $(".showgrid").show();
	  $("#grid").fadeOut();
	  $(this).hide();
	});
	
	$(document).on('click', '.shape', function(){
		var shapetype = $(this).attr('class');
	  $('.shape').removeClass('current');
	  $('#icona').removeClass('current');
	  $('#icona').removeClass('ios');
	  $('#icona').removeClass('square');
	  $('#icona').removeClass('circle');
	  $('#icona').removeClass('squircle');
	  $('#icona').removeClass('roundsquare');
	  $(this).addClass('current');
	  $('#icona').addClass(shapetype);
	  
	  if ($('#icona').hasClass("square")) {
	  	$('.iconwrap').css('background','#FFC200');
	  }
	  else {
		  $('.iconwrap').css('background','none');
	  }
	});
		
});