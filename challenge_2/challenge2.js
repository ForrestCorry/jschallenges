$(function(){
    var replaced = $("body").html().replace(/Bacon/g,'Laser Vision');
		$("body").html(replaced);


    var state = true;
    $("h1").click(function(){
    	if (state){
    		$("h1").css({color: "red"});
    	}else{
    		$("h1").css({color: "black"});
    	}
    	state = !state;
     });

    $('.title:even').hide();

	$('.post:last').remove();
	$('.post:last').remove();
	$('.post:last').remove();

	$('aside').remove();
	$('footer li:even').hide();

});