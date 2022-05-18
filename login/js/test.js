$(function(){

    let loginBtn = $('.login_btn')
    let popUp = $('.popup_login')
    let wingBtn = $('.wing_btn')
    let wingBanner = $('.wing_banner')

    const id = 'green'
    const pw = 12345 

    let state = false //로그인 창 상태변수
    let login = false // 로그인 상태변수
    let i = 5 // 로그인 시도 가능 카운트

    $('.login').click(function(loginTry){

        let userId = $('.id').val()
        let userPw = $('.pw').val()
        
        if(id==userId  && pw==userPw && i>0){
            loginBtn.text('로그아웃')
            alert('로그인 성공')
            login = true
            $('.id').val('')
            $('.pw').val('')
            $('.close').click()
        }else if(id!=userId && pw==userPw && i>0){
            alert('아이디가 틀렸습니다.'+i+'회 남았습니다.')
            return i-=1
        }else if(id==userId && pw!=userPw && i>0){
            alert('비밀번호가 틀렸습니다.'+i+'회 남았습니다.')
            return i-=1
        }else if (id!=userId && pw!=userPw && i>0){
            alert('아이디와 비밀번호가 틀렸습니다.'+i+'회 남았습니다.')
            return i-=1
        }else {
            alert('더 이상 로그인 할 수 없습니다.')
        }
    })//로그인 이벤트 함수


    loginBtn.on('click',function(){
        if(!state && !login){
            popUp.fadeIn(500).css('display','flex').draggable()
            state = true
            $('body>*').not('.popup_login').css('opacity','0.1')
            loginTry()
        }else if(!state && login){
            login = false
            loginBtn.text('로그인')
            alert('로그아웃 하였습니다.')
        }
    })

    $('.close').on('click',function(){
        popUp.fadeOut(500)
        $('.id').val('')
        $('.pw').val('')
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