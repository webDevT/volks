$(function(){

$('.button-1').click(function(){
	$('.modal-1').show();
	$('.button').hide();
	$('.modal-content').removeClass('fadeOutDown');

})

$('.button-2').click(function(){
	$('.modal-2').show();
	$('.button').hide();
	$('.modal-content').removeClass('fadeOutDown');

})

$('.button-3').click(function(){
	$('.modal-3').show();
	$('.button').hide();
	$('.modal-content').removeClass('fadeOutDown');

})


$('.button-4').click(function(){
	$('.modal-4').show();
	$('.button').hide();
	$('.modal-content').removeClass('fadeOutDown');

})


$('.button-5').click(function(){
	$('.modal-5').show();
	$('.button').hide();
	$('.modal-content').removeClass('fadeOutDown');

})


$('.button-6').click(function(){
	$('.modal-6').show();
	$('.button').hide();
	$('.modal-content').removeClass('fadeOutDown');

})


$('.button-7').click(function(){
	$('.modal-7').show();
	$('.button').hide();
	$('.modal-content').removeClass('fadeOutDown');

})


$('.close').click(function(){
	$('.modal').fadeOut();
	$('.button').show();
	$('.modal-content').addClass('fadeOutDown');
})

});

jQuery(function($){
  $(document).mouseup(function (e){ 
    var choose = $(".left-heand"); 
    var modal = $('.modal');
    var button = $('.button')
    var modalContent = $('.modal-content')

    if (!choose.is(e.target) 
        && choose.has(e.target).length === 0) { 
      modal.fadeOut();
  	button.show();
  	modalContent.addClass('fadeOutDown');
    }
  });
});