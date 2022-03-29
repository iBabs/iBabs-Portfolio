const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const headline= document.querySelector(".headline");
const logo = document.querySelector("#logo");
const nav = document.querySelector("nav");
const mimg= document.querySelector(".main-img")

const tl = new TimelineMax();

tl.fromTo(hero, 1, {height:"0%"}, {height:"90%", ease: Power2.easeInOut}).fromTo(
    hero, 1.2, {width:"100%"}, {width:"90%", ease: Power2.easeInOut})
    .fromTo(slider, 1.2, {x:"-100%"}, {x:"0%"}, "-=1.2")
    .fromTo( headline, 0.5,{opacity: 0, x:30}, {opacity:1, x:0}, "-=0.5")
    .fromTo( logo, 0.5,{opacity: 0, x:30}, {opacity:1, x:0}, "-=0.5")
    .fromTo( nav, 0.5,{opacity: 0, y:30}, {opacity:1, y:0}, "-=0.5")


    var target = $('div');
    var targetHeight = target.outerHeight();
    
    $(document).scroll(function(e){
        var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
        if(scrollPercent >= 0){
            target.css('opacity', scrollPercent);
        }
    });