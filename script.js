const burger = document.querySelector('nav svg');

/*
let odd_click = 0;
burger.addEventListener('click',()=>{
    if (odd_click == 0) {
        burger.style.borderRadius ="50%";
        burger.style.transform = "scaleX(0.5)";
        burger.style.display = "flex";
        burger.style.justifyContent = "center";
        odd_click = 1;
    }else{
        burger.style.borderRadius ="0%";
        burger.style.transform = "scaleX(1)";
        burger.style.display = "block";
        odd_click = 0;
    }
});
*/

burger.addEventListener('click',()=> {
    if (burger.classList.contains('active')) {
        gsap.to(".links",{x: "100%"});
        gsap.to(".line",{stroke: "white",x:0});
        gsap.set("body",{overflow: "auto"});
        gsap.set("body",{overflowX: "auto"});
        gsap.to(burger,{borderWidth:3 , borderRadius:"0%" ,scaleX: 1});        
    }else{
        gsap.to(".links",{x: "0%"});
        gsap.to(".line",{stroke: "black",x:5});
        gsap.fromTo('.links a',
            { opacity:0, y: 0 },
            { opacity:1, y: 20 ,delay:0.25,stagger:0.25 })
            gsap.set("body",{overflow: "hidden"});
        gsap.to(burger ,{borderWidth:0, borderRadius:"50%", scaleX:0.5});
    }
    burger.classList.toggle("active");
})

const videos = gsap.utils.toArray('.video');

