$(function(){
////////////////////////////////////
function tabHandler() {
    //console.log($(this),$(this).index())
    var idx = $(this).index();
    //console.log(idx)
    $('.tabLink li').removeClass('active');
    $(this).addClass('active');
    //$('.tabContent>div').removeClass('active');
    //$('.tabContent>div').eq(idx).addClass('active');
    $('.tabContent>div').eq(idx).addClass('active').siblings().removeClass('active');
}

$('.tabLink li').on('click', tabHandler);

$('.xi-close').on('click', function(){
    $('.headerWrap').slideToggle();
})

////////////////////////////////////
})