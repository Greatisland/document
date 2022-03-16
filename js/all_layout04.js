$ (function(){
///////////////////////////////////////
//$('선택').on('이벤트',할 일)
//할 일 => function 이름() {}

//$(this) 이벤트 대상
//$(this).index() 번호

//console.log($('.Wrap').index());

$('.popUp button').on('click', 팝업창끄기);

function 팝업창끄기() {
    console.log(
        $(this).parent().index()
    )

    $(this).parent().hide();
}
//////////////////////////////////////
})