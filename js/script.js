//Author: Patrick Furbert
//Date: 

$(document).ready(function(){

//insert jQuery stuff here...

$(".hamburger").click(function(){
	$(".overlay").css("display", "block");
});

$(".close").click(function(){
	$(".overlay").css("display", "none");
});


var emailRE = /^(\w+)@urmc\.rochester\.edu$/i;
var passwordRE = /^[\w@!-]{8,20}$/i;

//handler for username
$(".email-input").keyup(() => {
	if(emailRE.test($(".email-input").val())){
		$(".email-input").addClass("valid");
		$(".email-input").removeClass("invalid");
		$(".email-container p").css({"opacity":"0", "height":"0"});
	}else{
		$(".email-input").addClass("invalid");
		$(".email-input").removeClass("valid");
		$(".email-container p").css({"opacity":"1", "height":"auto"});


	}
});

//handler for password
$(".password-input").keyup(() => {
	if(passwordRE.test($(".password-input").val())){
		$(".password-input").addClass("valid");
		$(".password-input").removeClass("invalid");
		$(".password-container p").css({"opacity":"0", "height":"0"});

	}else{
		$(".password-input").addClass("invalid");
		$(".password-input").removeClass("valid");
		$(".password-container p").css({"opacity":"1", "height":"auto"});


	}
});


	


});