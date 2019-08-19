const front = document.querySelector(".front");
const slide1 = document.querySelector("#slide1");
const slide2 = document.querySelector("#slide2");
const slide3 = document.querySelector("#slide3");
const slide4 = document.querySelector("#slide4");
const slide5 = document.querySelector("#slide5");

const tl = new TimelineMax();

//------------------------
//   top-down animation
//------------------------
tl.fromTo(front, 1, { height: "0%" }, { height: "65%", ease: Power2.easeInOut })
    .fromTo(front, 1.2, { width: "50%" }, { width: "26%", ease: Power2.easeInOut })
    .fromTo(slide1, 1.2, { y: "-100%" }, { y: "0%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(slide2, 1.2, { y: "100%" }, { y: "0%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(slide3, 1.2, { y: "-100%" }, { y: "0%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(slide4, 1.2, { y: "100%" }, { y: "0%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(slide5, 1.2, { y: "-100%" }, { y: "0%", ease: Power2.easeInOut }, "-=1.2")


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