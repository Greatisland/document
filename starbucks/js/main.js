document.querySelector('.header').addEventListener('click',function(e){
  let searchBar = document.querySelector('#searchbar')
  if(e.target.classList.contains('search_icon')){
    searchBar.style.width = '160px'
    searchBar.setAttribute('placeholder','통합검색')
  }else if(!e.target.classList.contains('searchbar')){
    searchBar.style.width = '36px'
    searchBar.setAttribute('placeholder','')
  }
})
// searchbar

let menuItems = document.querySelectorAll('.item')

menuItems.forEach(function(menuItem){
  menuItem.addEventListener('mouseover',function(){
    this.querySelector('.item__contents').style.display = 'block'
    this.querySelector('.item__contents').classList.add('on')
  })
  menuItem.addEventListener('mouseout',function(){
    this.querySelector('.item__contents').style.display = 'none'
    this.querySelector('.item__contents').classList.remove('on')
  })
})
//menu_slide

  // window.addEventListener('load',function(){
  //   document.querySelector('.visual01').classList.add('on')
  //   setTimeout(function(){
  //     document.querySelector('.visual03').classList.add('on')
  //   },600)
  //   setTimeout(function(){
  //     document.querySelector('.visual02').classList.add('on')
  //   },1200)
  //   setTimeout(function(){
  //     document.querySelector('.main_btn').classList.add('on')
  //   },1800)
  // })

let visualImgs = document.querySelectorAll('.visual_img')
visualImgs.forEach((visualImg,index)=>{
  gsap.to(visualImg,1,{
    delay: index*0.5,
    opacity: 1
  })
})
//main_visual

document.querySelector('#banner_plus_btn').addEventListener('change',function(){
  if(this.checked){
    document.querySelector('.promotion').style.height = '650px'
  }else{
    document.querySelector('.promotion').style.height = '0'
  }
})
//banner_slide

const topBtn = document.querySelector('.top_btn')
topBtn.addEventListener('click',()=>{
  gsap.to(window, 0.5, { //gsap.to(요소, 시간, {애니메이션 옵션})
    scrollTo: 0
  })
})
//top_btn

const badge = document.querySelector('.badge')
window.addEventListener('scroll',()=>{
  if(window.scrollY > 600){
    gsap.to(badge,0.3,{
      opacity: 0
    })
  }else{
    gsap.to(badge,0.3,{
      opacity: 1
    })
  }
})
//badge

new Swiper('.inner_banner .swiper_notice', {
  direction: 'vertical',
  delay: 1000,
  autoplay: true,
  loop: true,
})
// notice

new Swiper('.promotion .swiper_inner_slide', {
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  spaceBetween: 10,
  autoplay: {
    delay: 3000
  }
})
//promotion