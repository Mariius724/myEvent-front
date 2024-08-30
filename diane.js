let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('#navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler')
let themeBtn = document.querySelector('.theme-btn')
toggleBtn.onclick = () = {
    themeToggler.classList.toggle('active')
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    themeToggler.classList.romove('active')
}

document.querySelectorAll('theme-toggler .theme-') .forEach(btn =>{
  btn-onclick = () =>{
  let color = btn.computedStyleMap.backgroud;
    document.querySelector(':root').style.setProperty('--main-color',color);
  }  
})

var swiper = new Swiper('.home-slider',){
    effect: "coverflow",
    garbCursor: true,
    centeredSlider: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 2,
        depth: 100,
        modifier: 2,
        slidesShadows: true,
    },
    loop:true,
    autoplay:{
        delay: 3000,
        disableOnInteration:false,
    }
},

var swiper = new Swiper('.review-slide',){
    slidesPreView: 1,
    garbCursor: true,
    loop: true,
    spaceBetween: 10,
    breakpoints: {

    }
    0:{
        slidesPreView: 1,
    },

    700:{
        slidesPreView: 2,
    },

    1050:{
        slidesPreView: 3,
    },
    },
    loop:true,
    autoplay:{
        delay: 5000,
        disableOnInteration:false,
    }
    