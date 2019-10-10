const logo = document.querySelector('.logo-img');
const front = document.querySelector(".front");
const slide1 = document.querySelector("#slide1");
const slide2 = document.querySelector("#slide2");
const slide3 = document.querySelector("#slide3");
const slide4 = document.querySelector("#slide4");
const slide5 = document.querySelector("#slide5");

const tl = new TimelineMax();
var code = 123;


//------------------------
//   top-down animation
//------------------------
tl.fromTo(front, 1, { height: "0%" }, { height: "65%", ease: Power2.easeInOut })
    .fromTo(front, 1.2, { width: "50%" }, { width: "26%", ease: Power2.easeInOut })
    // .fromTo(logo, .5, {height: "0%"}, {height: "50%", ease: Power2.easeInOut})
    // .fromTo(logo, .7, { width: "0%" }, { width: "100%", ease: Power2.easeInOut })
    .fromTo(slide1, 1.2, { y: "-100%" }, { y: "0%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(slide2, 1.2, { y: "100%" }, { y: "0%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(slide3, 1.2, { y: "-100%" }, { y: "0%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(slide4, 1.2, { y: "100%" }, { y: "0%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(slide5, 1.2, { y: "-100%" }, { y: "0%", ease: Power2.easeInOut }, "-=1.2")


// Js for checking if today's code is correct

$(".checkIn").on('submit', (event) => {

    event.preventDefault();
    var userCode = document.getElementById("myForm").elements[0].value;
    userCode = parseInt(userCode)
    if (code === userCode) {
        window.location = "https://github.com/login/oauth/authorize?client_id=dd87eb0d1732bf5e0f5b&scope=user&redirect_uri=http://localhost:8080/oauth/redirect";
    }
})




// //------------------------
// //   steps-up animation
// //------------------------
// tl.fromTo(front, 1, { height: "0%" }, { height: "65%", ease: Power2.easeInOut })
//     .fromTo(front, 1.2, { width: "50%" }, { width: "26%", ease: Power2.easeInOut })
//     .fromTo(slide1, 1.2, { y: "100%" }, { y: "0%", ease: Power2.easeInOut }, "-=1.2")
//     .fromTo(slide2, 1.2, { y: "125%" }, { y: "0%", ease: Power2.easeInOut }, "-=1.2")
//     .fromTo(slide3, 1.2, { y: "150%" }, { y: "0%", ease: Power2.easeInOut }, "-=1.2")
//     .fromTo(slide4, 1.2, { y: "175%" }, { y: "0%", ease: Power2.easeInOut }, "-=1.2")
//     .fromTo(slide5, 1.2, { y: "200%" }, { y: "0%", ease: Power2.easeInOut }, "-=1.2")

// //------------------------
// //   steps-down animation
// //------------------------
// tl.fromTo(front, 1, { height: "0%" }, { height: "65%", ease: Power2.easeInOut })
//     .fromTo(front, 1.2, { width: "50%" }, { width: "26%", ease: Power2.easeInOut })
//     .fromTo(slide1, 1.2, { y: "-100%" }, { y: "0%", ease: Power2.easeInOut }, "-=1.2")
//     .fromTo(slide2, 1.2, { y: "-125%" }, { y: "0%", ease: Power2.easeInOut }, "-=1.2")
//     .fromTo(slide3, 1.2, { y: "-150%" }, { y: "0%", ease: Power2.easeInOut }, "-=1.2")
//     .fromTo(slide4, 1.2, { y: "-175%" }, { y: "0%", ease: Power2.easeInOut }, "-=1.2")
//     .fromTo(slide5, 1.2, { y: "-200%" }, { y: "0%", ease: Power2.easeInOut }, "-=1.2")


// //------------------------
// //   left-side animation
// //------------------------
// tl.fromTo(front, 1, { height: "0%" }, { height: "65%", ease: Power2.easeInOut })
//     .fromTo(front, 1.2, { width: "50%" }, { width: "26%", ease: Power2.easeInOut })
//     .fromTo(slide1, 1.2, { x: "-105%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
//     .fromTo(slide2, 1.2, { x: "-205%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
//     .fromTo(slide3, 1.2, { x: "-305%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
//     .fromTo(slide4, 1.2, { x: "-405%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
//     .fromTo(slide5, 1.2, { x: "-505%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")


//------------------------
//   custom animation
//------------------------
// tl.fromTo(front, 1, { height: "0%" }, { height: "65%", ease: Power2.easeInOut })
//     .fromTo(front, 1.2, { width: "50%" }, { width: "26%", ease: Power2.easeInOut })
//     .fromTo(slide1, 1.2, { x: "-105%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
//     .fromTo(slide2, 1.2, { x: "-205%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
//     .fromTo(slide3, 1.2, { y: "-100%" }, { y: "0%", ease: Power2.easeInOut }, "-=1.2")
//     .fromTo(slide4, 1.2, { x: "205%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
//     .fromTo(slide5, 1.2, { x: "105%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")

