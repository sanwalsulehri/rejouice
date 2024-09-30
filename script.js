function loader(){
  var tl = gsap.timeline()


  tl.from("#loader h3",{
    x:50,
    opacity: 0,
    duration: 1,
    stagger: 1,
  })
  tl.to("#loader h3",{
    opacity: 0,
    x:-40,
    duration: 1,
    stagger: 0.4,
  })
  tl.to("#loader h3",{
    display: "none"
  })
  tl.to("#loader .ss",{
    display: "block",
  })
  tl.to(".ss h4",{
    stagger: 1,
    opacity: 1,
    delay: -2,
    duration: 0.5,
  })
  tl.to(".ss h4",{
    opacity: 0,
    duration: 1,
    stagger: 0.4,
  })
  tl.to(".ss h4",{
    position: "absolute",
    display: "none"
  })
  tl.to("#loader .sss",{
    display: "flex",
  })
  tl.to("#loader h2",{
    x:0,
    opacity: 1,
    duration: 1,
    stagger: 1,
  })
  tl.to("#loader h2",{
    opacity: 0,
    x:-40,
    duration: 1,
    stagger: 0.4,
  })
  tl.to("#loader h2",{
   display: "none"
  })
  tl.to("#loader",{
    opacity: 0,
  })
  tl.to("#loader",{
    display: "none"
  })
  tl.from("#page1-content span",{
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 0.3,
    delay:-0.2,
  })
}
loader()

function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()

function mouseFollower(){
let page1Content = document.querySelector("#page1-content")
let cursor = document.querySelector("#cursor")
page1Content.addEventListener("mousemove", function(dets){
   gsap.to(cursor,{
    left: dets.x,
    top: dets.y,
   })
})

page1Content.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        opacity: 1,
        scale: 1,
    })
})

page1Content.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        opacity: 0,
        scale: 0,
    })
})
}
mouseFollower()

function page2Anim() {
  gsap.fromTo(".bounding .boundingelem", 
    {
      y: '100%',  
    }, 
    {
      y: '-10%',   
      duration: 2,
      stagger: 0.2,     
      scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 30%",  
        end: "top 80%", 
        scrub: 2,         
      }
    }
  );


  gsap.fromTo(".ff", 
    {
      y: '-150%',
      opacity: 0, 
    }, 
    {
      y: '0%',  
      duration: 2,
      opacity: 1,
      borderWidth: '1px',
      stagger: 0.2,    
      scrollTrigger: {
        trigger: "#page2",
        scroller: "#main", 
        start: "top 50%",  
        end: "top 50%",   
        scrub: 3,        
      }
    }
  );
}
page2Anim();

function page4Anim() {
  gsap.fromTo(".boundingg .boundinggelem", 
    {
      y: '100%',  
    }, 
    {
      y: '-10%',   
      duration: 2,
      stagger: 0.2,     
      scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start: "top 20%",  
        end: "top 20%", 
        scrub: 2,         
      }
    }
  );


  gsap.fromTo(".fff", 
    {
      y: '-150%',
      opacity: 0, 
    }, 
    {
      y: '0%',  
      duration: 2,
      opacity: 1,
      borderWidth: '1px',
      stagger: 0.2,    
      scrollTrigger: {
        trigger: "#page4",
        scroller: "#main", 
        start: "top 20%",  
        end: "top 20%",    
        scrub: 3,        
      }
    }
  );
}
page4Anim();

function blackCursor(){
  let cont = document.querySelector("#page5")
  let cursorB = document.querySelector(".circleCursor")
  cont.addEventListener("mousemove", function(dets){
    gsap.to(cursorB,{
      left: dets.x,
      top: dets.y,
    })
  })
  cont.addEventListener("mouseenter", function(){
    gsap.to(cursorB,{
        opacity: 1,
        scale: 1,
        rotate: 0,
    })
})

cont.addEventListener("mouseleave", function(){
    gsap.to(cursorB,{
        opacity: 0,
        scale: 0,
        rotate: 90,
    })
})
}
blackCursor()

function page6Anim() {
  gsap.fromTo(".boundingg .boundinggelem", 
    {
      y: '100%',  
    }, 
    {
      y: '-10%',   
      duration: 2,
      stagger: 0.2,     
      scrollTrigger: {
        trigger: "#page6",
        scroller: "#main",
        start: "top 20%",  
        end: "top 20%", 
        scrub: 2,         
      }
    }
  );


  gsap.fromTo(".fff", 
    {
      y: '-150%',
      opacity: 0, 
    }, 
    {
      y: '0%',  
      duration: 2,
      opacity: 1,
      borderWidth: '1px',
      stagger: 0.2,    
      scrollTrigger: {
        trigger: "#page6",
        scroller: "#main", 
        start: "top 20%",  
        end: "top 20%",   
        scrub: 3,        
      }
    }
  );
}
page6Anim();

function swiper(){
  var swiper = new Swiper(".mySwiper", {
    // slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
  });
}
swiper()




function page8Anim() {
  gsap.fromTo(".boelem", 
    {
      y: '-100%',  
    }, 
    {
      y: '0%',   
      duration: 2,
      stagger: 0.2,     
      scrollTrigger: {
        trigger: "#page8",
        scroller: "#main",
        start: "top 20%",  
        end: "top 40%", 
        scrub: 2,         
      }
    }
  );

}

page8Anim()

function footerAnim(){
  var tl = gsap.timeline()
  tl.from(".footer h1 span",{
    y: -120,
    opacity: 0,
    stagger: 1,
    duration: 4,
    scrollTrigger: {
      trigger: ".footer",
      scroller: "#main",
      start: "top 20%",  
      end: "top 60%", 
      scrub: 2,         
    }
  })

  tl.fromTo(".footerf", 
    {
      y: '-100%',  
      opacity: 0,
    }, 
    {
      y: '0%',
      opacity: 1,   
      duration: 4,
      stagger: 0.8,     
      scrollTrigger: {
        trigger: ".footer",
        scroller: "#main",
        start: "top 5%",  
        end: "top 40%", 
        scrub: 2,         
      }
    }
  );

  tl.fromTo(".flfo2", 
    {
      y: '-100%',  
      opacity: 0,
    }, 
    {
      y: '0%',
      opacity: 1,   
      duration: 4,
      stagger: 0.8,     
      scrollTrigger: {
        trigger: ".footer",
        scroller: "#main",
        start: "top 5%",  
        end: "top 40%", 
        scrub: 2,         
      }
    }
  );
}
footerAnim()

function hamburger(){
  let ham = document.querySelector("#ham");
  let menu = document.querySelector(".menu")
  let close = document.querySelector(".close")

  ham.addEventListener("click", function(){
    menu.classList.toggle("hide")
  })
  close.addEventListener("click", function(){
    menu.classList.toggle("hide")
  })
 
}
hamburger()