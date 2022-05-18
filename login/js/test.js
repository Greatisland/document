$(function(){

    let login = $('.login_btn')
    let popUp = $('.popup_login')
    let wingBtn = $('.wing_btn')
    let wingBanner = $('.wing_banner')

    const id = 'green'
    const pw = 12345

    let state = false
    
    
    login.on('click',function(){
        if(!state){
        popUp.fadeIn(500).css('display','flex').draggable()
        }
        state = true
        $('body>*').not('.popup_login').css('opacity','0.1')
        $('.login').click(function(){

            let userId = $('.id').val()
            let userPw = $('.pw').val()

            if(id==userId  || pw==userPw){
                alert('로그인 성공')
            }else{
                alert('로그인에 실패하였습니다.')
            }
        })
    })

    $('.close').on('click',function(){
        popUp.fadeOut(500)
        $('body>*').not('.popup_login').css('opacity','1')
        state = false
    })

// --------------------------- 로그인 창 



    let onoff = 1

    wingBtn.on('click',function(){
        if(onoff == 1){
            $(this).stop().animate({right : 200},500,function(){
                $(this).text('닫기')
                wingBanner.stop().animate({right : 0},500)
            })
            onoff = 0
        }else if(onoff == 0){
            $(this).stop().animate({right : 0},500,function(){
                $(this).text('열기')
                wingBanner.stop().animate({right : -200},500)
            })
            onoff = 1
        }
    })  
// -------------------------------윙배너
})