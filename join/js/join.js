document.querySelector('.join_btn').addEventListener('click',function(){
    document.join.classList.add('on')
})

let id = ['abcdef','abcdefg','green']
let pw = ['123456','654321']
let nick = ['닉네임','별명','학생']
let idCheck = false
let nickCheck = false
let i = 5

//로그인 시도
document.login.onsubmit = login
function login(e) {
    let userId = document.login.user_id.value
    let userPw = document.login.user_pw.value

    if (id.includes(userId, 0) && pw.includes(userPw, 0) && i > 0) {
        alert('로그인에 성공하였습니다.')
    } else if (!id.includes(userId, 0) && pw.includes(userPw, 0) && i > 0) {
        e.preventDefault()
        alert(`아이디가 틀렸습니다. 로그인 가능 횟수가 ${i}회 남았습니다.`)
        return i -= 1
    } else if (id.includes(userId, 0) && !pw.includes(userPw, 0) && i > 0) {
        e.preventDefault()
        alert(`비밀번호가 틀렸습니다. 로그인 가능 횟수가 ${i}회 남았습니다.`)
        return i -= 1
    } else if (!id.includes(userId, 0) && !pw.includes(userPw, 0) && i > 0) {
        e.preventDefault()
        alert(`아이디와 비밀번호가 틀렸습니다. 로그인 가능 횟수가 ${i}회 남았습니다.`)
        return i -= 1
    } else {
        e.preventDefault()
        alert('더 이상 로그인 할 수 없습니다.')
    }
}

//id 중복 확인
document.querySelector('.id_btn').addEventListener('click', function () {
    let userId = document.join.userId.value
    if (!userId) {
        alert('아이디를 입력해주세요')
    } else {
        if (id.includes(userId, 0)) {
            alert('아이디가 중복되었습니다')
            document.querySelectorAll('.notice_suc')[0].style.display = 'none'
            idCheck = false
        }else if(userId.length >= 6 && userId.length <= 12){
            alert('사용 가능한 아이디입니다')
            document.querySelectorAll('.notice_suc')[0].style.display = 'block'
            idCheck = true
        }else{
            alert('6자 이상 12자 이내로 작성해주세요')
            document.querySelectorAll('.notice_suc')[0].style.display = 'none'
            idCheck = false
        } 
    }
})

//id 길이 확인
document.join.userId.onchange = function(){
    let userId = document.join.userId.value
    if(userId.length < 6 || userId.length > 12){
        document.querySelectorAll('.notice_length')[0].style.display = 'block'
    }else{
        document.querySelectorAll('.notice_length')[0].style.display = 'none'
    }
}

//닉네임 중복 확인
document.querySelector('.nick_btn').addEventListener('click', function () {
    let userNick = document.join.nickName.value
    if (!userNick) {
        alert('닉네임을 입력해주세요')
    } else {
        if (nick.includes(userNick, 0)) {
            alert('닉네임이 중복되었습니다')
            document.querySelectorAll('.notice_suc')[1].style.display = 'none'
            nickCheck = false
        } else if (userNick.length >= 6 && userNick.length <= 12){
            alert('사용 가능한 닉네임입니다')
            document.querySelectorAll('.notice_suc')[1].style.display = 'block'
            nickCheck = true
        }else{
            alert('6자 이상 12자 이내로 작성해주세요')
            document.querySelectorAll('.notice_suc')[1].style.display = 'none'
            nickCheck = false
        } 
    }
})

//닉네임 길이 확인
document.join.nickName.onchange = function(){
    let userNick = document.join.nickName.value
    if(userNick.length < 6 || userNick.length > 12){
        document.querySelectorAll('.notice_length')[1].style.display = 'block'
    }else{
        document.querySelectorAll('.notice_length')[1].style.display = 'none'
    }
}

//비밀번호 확인
let userPw = document.getElementsByName('userPw')[0]
let userPwAgain = document.getElementsByName('userPw')[1]
let userPwCheck = true
userPwAgain.onchange = function(){
    if(
        userPw.value == userPwAgain.value &&
        userPw.value != '' &&
        userPw.value.length >= 6 && userPw.value.length <= 12
      ){
        document.querySelector('.pw_notice').style.display = 'none'
        document.querySelector('.pw_notice2').style.display = 'block'
        userPwCheck = true
    }else{
        document.querySelector('.pw_notice2').style.display = 'none'
        document.querySelector('.pw_notice').style.display = 'block'
        userPwCheck = false
    }
}
userPw.onchange = function(){
    if(
        userPw.value == userPwAgain.value &&
        userPw.value != '' &&
        userPw.value.length >= 6 && userPw.value.length <= 12
      ){
        document.querySelector('.pw_notice').style.display = 'none'
        document.querySelector('.pw_notice2').style.display = 'block'
        userPwCheck = true
    }else{
        document.querySelector('.pw_notice2').style.display = 'none'
        document.querySelector('.pw_notice').style.display = 'block'
        userPwCheck = false
    }
}

//이메일
let email = document.join.email
email.onchange = function(){
    document.join.email_last.value = email.value
}

//전화번호
number()
phoneNumber()
function number(){
    let firstNumber = document.join.first_number
    let middleNumber = document.join.middle_number
    let lastNumber = document.join.last_number
    firstNumber.onchange = function(){
        if(firstNumber.value){
            middleNumber.focus()
        }
    }
    let i = 0;
    middleNumber.onkeydown = function(){
        i++
        if(i>=4){
            lastNumber.focus()
        }
    }
}
function phoneNumber(){
    let firstNumber = document.join.cell_first_number
    let middleNumber = document.join.cell_middle_number
    let lastNumber = document.join.cell_last_number
    firstNumber.onchange = function(){
        if(firstNumber.value){
            middleNumber.focus()
        }
    }
    let i = 0;
    middleNumber.onkeydown = function(){
        i++
        if(i>=5){
            lastNumber.focus()
        }
    }
}


//최종 가입
document.join.onsubmit = function(e){
    let userNick = document.join.nickName.value
    if(
        idCheck == true &&
        nickCheck == true &&
        userPwCheck == true
    ){
        alert(`${userNick}님! 가입을 환영합니다.`)
        id.push(userId)
        nick.push(userNick)
    }else{
        alert('아이디, 닉네임, 비밀번호 중복 체크를 해주세요')
        e.preventDefault()
    }
}
