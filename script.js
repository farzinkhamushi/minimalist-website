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
        //
        gsap.to(".line",{stroke: "white",scaleX:1});
        ///////////////////////////////////////
        gsap.set("body",{overflow: "auto"});
        gsap.set("body",{overflowX: "hidden"});
        //gsap.to(burger,{borderWidth:3 , borderRadius:"0%" ,scaleX: 1});        
    }else{
        gsap.to(".links",{x: "0%"});
        //
        gsap.to(".line",{stroke: "black",scaleX:0.5});
        //gsap.to(burger,{backgroundColor:"black"});
        //////////////////////////////////////////
        gsap.fromTo('.links a',
            { opacity:0, y: 0 },
            { opacity:1, y: 20 ,delay:0.25,stagger:0.25 })
            gsap.set("body",{overflow: "hidden"});
        //gsap.to(burger ,{borderWidth:0, borderRadius:"50%", scaleX:0.5});
    }
    burger.classList.toggle("active");
})



const videos = gsap.utils.toArray('.video');
gsap.set( videos ,{ opacity : 0 } );

videos.forEach((video) => {
    ScrollTrigger.create({
        trigger: video,
        start: "top center",
        end: "bottom center",
        markers: false,
        onEnter: () => {
            gsap.to(video, {opacity:1});
            video.play();
        },
        onEnterBack: () => video.play(),
        onLeave: () => video.pause(),
        onLeaveBack: () => video.pause(),
    });
});