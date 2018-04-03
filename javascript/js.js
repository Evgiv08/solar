  $('.slider').slick({
  	dots: true,
  	arrows: false
  });

$('.theory-li').on('click', function() {
	$('.nav > li').css({"background-color":""});
	$('.theory-li').css({"background-color":"#ffcd00"});
  	$('.forex > div').css({"display":"none"});
  	$('.theory').css({"display":"block"});
  	$('.forex-bg-img').css({"background-image":"url(images/bg-forex.jpg)", "background-position": ""});
});
$('.infinox-li').on('click', function() {
	$('.nav > li').css({"background-color":""});
	$('.infinox-li').css({"background-color":"#ffcd00"});
  	$('.forex > div').css({"display":"none"});
  	$('.infinox').css({"display":"block"});
  	$('.forex-bg-img').css({"background-image":"url(images/infifox-bg.png)", "background-position": ""});
});
$('.trade-li').on('click', function() {
	$('.nav > li').css({"background-color":""});
	$('.trade-li').css({"background-color":"#ffcd00"});
  	$('.forex > div').css({"display":"none"});
  	$('.trade').css({"display":"block"});
  	$('.forex-bg-img').css({"background-image":"url(images/trade-bg.png)", "background-position": ""});
});
$('.mt4-li').on('click', function() {
	$('.nav > li').css({"background-color":""});
	$('.mt4-li').css({"background-color":"#ffcd00"});
  	$('.forex > div').css({"display":"none"});
  	$('.mt4').css({"display":"block"});
  	$('.forex-bg-img').css({"background-image":"url(images/mt4-bg.png)", "background-position": ""});
});
$('.expert-li').on('click', function() {
	$('.nav > li').css({"background-color":""});
	$('.expert-li').css({"background-color":"#ffcd00"});
  	$('.forex > div').css({"display":"none"});
  	$('.mt4-expert').css({"display":"block"});
  	$('.forex-bg-img').css({"background-image":"url(images/mt4-expert-bg.png)", "background-position": "right 306px"});
});
$('.cuboid-li').on('click', function() {
	$('.nav > li').css({"background-color":""});
	$('.cuboid-li').css({"background-color":"#ffcd00"});
  	$('.forex > div').css({"display":"none"});
  	$('.cuboid').css({"display":"block"});
  	$('.forex-bg-img').css({"background-image":"url(images/cuboid-bg.png)", "background-position": "right 306px"});
});

$("#current_option").click(function(){
    customOptionsBlock = $("#custom_options");
    if (customOptionsBlock.is(":hidden")) {
        $("#custom_options").show();
    }
    else {
        $("#custom_options").hide();
    }
});

$("#custom_options li").click(function(){
    choosenValue = $(this).attr("data-value");
    $("select").val(choosenValue).prop("selected", true);
    $("#current_option span").text($(this).text());
    $("#current_option").attr("data-value", choosenValue);
     $("#custom_options").hide();
});


$('.menu-header>li:first-child, .menu-header>li:nth-child(2)').hover(
function(){
  $('.open-menu').css({'display': 'block'})
},
function(){
  $('.open-menu').css({'display': ''})
});