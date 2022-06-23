function sideTitle(){
  let sideTitles = document.querySelectorAll('.side_title')
  sideTitles.forEach(sideTitle => {
    let move = sideTitle.offsetWidth/2
    let sideTitleLeftStyle = window.getComputedStyle(sideTitle).getPropertyValue('left')
    sideTitleLeftStyle=='0px'?
    sideTitle.style.setProperty('--side_left', `-${move+13}px`):
    sideTitle.style.setProperty('--side_right', `-${move+13}px`)
  })
}
sideTitle()
//side_title 위치조정


let textList = document.querySelector('.text_list')
let animImgs = document.querySelectorAll('.anim_imgs')
function isYou (){
  let list = document.querySelectorAll('.is_you .list')
  textList.addEventListener('mouseover',(e)=>{
    if(e.target.classList.contains('txt_list01')){
      if(e.target.classList.contains('on')) return
      animImgs.forEach((element)=>{ element.classList.remove('on') })
      list.forEach((element)=>{ element.classList.remove('on') })
      animImgs[0].classList.add('on')
      list[0].classList.add('on')
    }else if(e.target.classList.contains('txt_list02')){
      if(e.target.classList.contains('on')) return
      animImgs.forEach((element)=>{ element.classList.remove('on') })
      list.forEach((element)=>{ element.classList.remove('on') })
      animImgs[1].classList.add('on')
      list[1].classList.add('on')
    }else if(e.target.classList.contains('txt_list03')){
      if(e.target.classList.contains('on')) return
      animImgs.forEach((element)=>{ element.classList.remove('on') })
      list.forEach((element)=>{ element.classList.remove('on') })
      animImgs[2].classList.add('on')
      list[2].classList.add('on')
    }
  },isYouMove())
}
isYou()

function isYouMove(){
  textList.addEventListener('mousemove', (e)=>{
    animImgs.forEach(element=>{
      element.style.transform = 
      'translate(' + (e.offsetX / e.target.getBoundingClientRect().width * 50) + 'px,'
      + (e.offsetY / e.target.getBoundingClientRect().height * 50) + 'px)'
    })
  })
}
//is_you section tab 구현