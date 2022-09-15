$(function(){

/* header menu */
$('.btn-menu').click(function(e){ 
    e.preventDefault(); 
    
    if($(this).hasClass('active')){
      $('body, .group-menu, .btn-menu').removeClass('active'); 
      $(this).find('.blind').text('메뉴열림');
    }else{
      $('body, .group-menu, .btn-menu').addClass('active'); 
      $(this).find('.blind').text('메뉴닫힘')
    }
  });


/* group-header prev scroll*/
  var FirstScroll = 0;
  var prevScrollTop = $(window).scrollTop(),
    curr = $(window).scrollTop();
 
  $(window).scroll(function(e){
    e.preventDefault();
    curr = $(this).scrollTop();

    if ( curr < prevScrollTop ){
      $(".group-header").addClass('active'); 
      $(".group-header").removeClass('hide'); 

      if(curr >= 100){
        $('.group-header').addClass('active'); 
      }else{
        $('.group-header').removeClass('active');
      }

    } else if( curr > prevScrollTop ) {
      $(".group-header").removeClass('active'); 
      $(".group-header").addClass('hide'); 
    }
    prevScrollTop = curr;
  });


/* trans english */
  $('.btn-trans.alert').click(function(e){
    e.preventDefault(); 
    alert("준비중입니다");
  });


/* effect01 font move */
$('.sc-effect01 .effect-top.one').each(function(i,el){
  gsap.to('.sc-effect01 .effect-top.one',{
  scrollTrigger:{
  trigger:el,
  start:'top 95%',
  end:'bottom top',
  toggleClass: "hide",
  scrub:5
  },
  xPercent:50 
  })
  })

$('.sc-effect01 .effect-top.two').each(function(i,el){
  gsap.to('.sc-effect01 .effect-top.two',{
  scrollTrigger:{
  trigger:el,
  start:'top 95%',
  end:'bottom top',
  toggleClass: "hide",
  scrub:5
  },
  xPercent:-50 
  })
  })




/* effect02 font box */
ScrollTrigger.matchMedia({
  "(min-width: 1025px)": function() { //desktop
    const effect02 = gsap.timeline({
      scrollTrigger:{
          trigger:".sc-effect02", 
          start:"0% 0%",
          end:"+=500%",
          scrub: 5,
          pin : true,
      },
    })
    effect02.addLabel('eff2')
    .to('.sc-effect02 .effect-top.one',{xPercent:50},'eff2')
    .to('.sc-effect02 .effect-top.two',{xPercent:-50},'eff2')
    .to('.box-area',{ left:'-10%'},'eff2')
  },
  "(min-width: 768px) and (max-width: 1024px)": function() { //tablet
    const effect02 = gsap.timeline({
      scrollTrigger:{
          trigger:".sc-effect02", 
          start:"0% 0%",
          end:"+=500%",
          scrub: 5,
          pin : true
      },
    })
    effect02.addLabel('eff2')
    .to('.sc-effect02 .effect-top.one',{xPercent:50},'eff2')
    .to('.sc-effect02 .effect-top.two',{xPercent:-50},'eff2')
    .to('.box-area',{ left:'-110%'},'eff2')
  },
  "(max-width: 767px)": function() { //mobile
    const effect02 = gsap.timeline({
      scrollTrigger:{
          trigger:".sc-effect02", 
          start:"0% 0%",
          end:"+=500%",
          scrub: 5,
          pin : true
      },
    })
    effect02.addLabel('eff2')
    .to('.sc-effect02 .effect-top.one',{xPercent:50},'eff2')
    .to('.sc-effect02 .effect-top.two',{xPercent:-50},'eff2')
    .to('.box-area',{ left:'-150%'},'eff2')
    
  },
 
  });



/* result */
const result = document.querySelectorAll('.sc-result .result-item');
result.forEach(el=>{

  xVal = (el.dataset.x) ? el.dataset.x : 0;

    gsap.from(el,{
        scrollTrigger:{
            trigger:el,
            start:"0% 50%",
            end:"top bottom",
            scrub:2,
        },
        xPercent:xVal,
        opacity:0
    })
})


/* service scroll */
gsap.from('.sc-service',{
  scrollTrigger:{
      trigger:".sc-service",
      start:"0% 50%",
      end:"top top",
      scrub:1
  },
  opacity:0
})


/* news scroll */
gsap.from('.sc-news',{
  scrollTrigger:{
      trigger:".sc-news",
      start:"0% 90%",
      end:"top top",
      scrub:1
  },
  opacity:0
})


 /* sc-news swiper */
 var newsSlide = new Swiper(".sc-news .swiper", {
  slidesPerView: 2.1, 
  // spaceBetween: 20,
});




/* loading */
gsap.to('.loading',{
  delay:1.2,
  opacity:0,
  display:'none',
  height:0,
  onComplete:function(){
    intro.play()
  }
})

gsap.to('.loading img',{
  delay:0.8,
  opacity:0,
  onComplete:function(){
    intro.play()
  }
})


mainTxt = gsap.timeline({})
const intro = gsap.fromTo('.sc-main .title-area .word',{
  yPercent:100,
  opacity:0
},{
  yPercent:0, 
  stagger:0.5,
  opacity:1,
  paused:true
})
  

})




