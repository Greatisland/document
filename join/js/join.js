document.querySelector('.join_btn').addEventListener('click',function(){
    document.getElementsByName('join')[0].classList.add('on')
})

let id = ['abcdef','abcdefg','green']
let nick = ['닉네임','별명','학생']
let idCheck = false
let nickCheck = false

//id 중복 확인
document.querySelector('.id_btn').addEventListener('click', function () {
    let userId = document.getElementsByName('userId')[0].value
    if(!userId){
        alert('아이디를 입력해주세요')
    }else{
            if (id.includes(userId,0)) {
            alert('아이디가 중복되었습니다')
            return idCheck
        } else {
            alert('사용 가능한 아이디입니다')
            idCheck = true
        }
    }
})

//닉네임 중복 확인
document.querySelector('.nick_btn').addEventListener('click',function(){
    let userNick = document.getElementsByName('nickName')[0].value
    if(!userNick){
            alert('닉네임을 입력해주세요')
    }else{
        if(nick.includes(userNick,0)){
            alert('닉네임이 중복되었습니다')
            return nickCheck
        }else{
            alert('사용 가능한 닉네임입니다')
            nickCheck = true
        }
    }
})

//비밀번호
let userPw = document.getElementsByName('userPw')[0]
let userPwAgain = document.getElementsByName('userPw')[1]
let userPwCheck = true
userPwAgain.onchange = function(){
    if(userPw.value != userPwAgain.value){
        document.querySelector('.pw_notice').style.display = 'inline'
        userPwCheck = false
    }else{
        document.querySelector('.pw_notice').style.display = 'none'
        userPwCheck = true
    }
}

//이메일
let email = document.getElementsByName('email')[0]
email.onchange = function(){
    document.getElementsByName('email_last')[0].value = email.value
}

//최종 가입
document.getElementsByName('join')[0].onsubmit = function(e){
    let userNick = document.getElementsByName('nickName')[0].value
    if(
        idCheck == true &&
        nickCheck == true &&
        userPwCheck == true
    ){
        alert(`${userNick}님! 가입을 환영합니다.`)
        id.push(userId)
        nick.push(userNick)
    }else{
        alert('아이디 또는 닉네임, 비밀번호 중복 체크를 해주세요')
        e.preventDefault()
    }
}
