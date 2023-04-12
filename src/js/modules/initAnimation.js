import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js"

gsap.registerPlugin(ScrollTrigger)

export const initAnimation = () => {
  const animTopText = document.querySelector(".hero__content_description>h1");
  const animTopButton = document.querySelector(".hero__content_description>.button");
  const animTopTopic = document.querySelector(".hero__content_description>p");
  const circle = document.querySelector(".circle");
  const topImg = document.querySelector(".hero__content_img");
  const supplyImg = document.querySelector(".supply__content_img>img");

//text animation objects
  const arrayFromAnimatedElements = [
    ".testimonials__list",
    ".supply__content_text>h2",
    ".supply__content_text>ul",
    ".supply__content_text>p",
    ".supply__content_text>.button",
    ".truck__content_text>h3",
    ".questions__title",
    ".questions__list>li",
    ".contact-us__content_title>h2",
    ".contact-us__content_title>p",
    ".contact-us__content_title>.button",
  ]
  const textAnimationObjects = document.querySelectorAll(arrayFromAnimatedElements.join(", "));


//hero start animation
  gsap.matchMedia().add("(min-width: 568px)", () => {
    gsap.timeline().fromTo(animTopText, {
      y: 50,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, "hero-1")
      .fromTo(animTopButton, {opacity: 0}, {opacity: 1}, "hero-2")
      .fromTo(animTopTopic, {opacity: 0}, {opacity: 1}, "hero-2")
      .fromTo(circle, {
          width: "32.1rem",
          height: "32.1rem",
        }, {
          width: "62.1rem",
          height: "62.1rem"
        }, "hero-1"
      )
      .fromTo(topImg, {
          x: "20rem",
          y: "20rem",
        }, {
          x: 0,
          y: 0
        }, "hero-1"
      )
//text animation on scroll
    textAnimationObjects.forEach(obj => {
      gsap.from(obj, {
        scrollTrigger: {
          trigger: obj,
        },
        y: "10rem",
        opacity: 0
      })
    })
//supply animation on scroll
    gsap.from(supplyImg, {
      scrollTrigger: supplyImg,
      x: "-10rem",
      y: "5rem"
    })
//truck animation on scroll
    const truckImg = document.querySelector('.truck__content_img')
    const truckTopText = document.querySelector('.truck__content_text>p')
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: truckImg
      }
    })
    tl.from(truckImg, {
      x: "5rem",
    })
      .from(truckTopText, {
        opacity: 0,
      })
// circles animation on scroll
    const circleAnimationObjects = document.querySelectorAll(".supply__content_img>.circle");
    circleAnimationObjects.forEach(obj => {
      gsap.from(obj, {
        scrollTrigger: {
          trigger: obj,
        },
        width: "32.1rem",
        height: "32.1rem",
      })
    })
  })
}