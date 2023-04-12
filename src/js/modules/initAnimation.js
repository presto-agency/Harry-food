import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js"

gsap.registerPlugin(ScrollTrigger)

export const initAnimation = () => {
  const animTopText = document.querySelector(".hero__content_description>h1");
  const animTopButton = document.querySelector(".hero__content_description>.button");
  const animTopTopic = document.querySelector(".hero__content_description>p");
  const circle = document.querySelector(".circle");
  const topImg = document.querySelector(".hero__content_img");
  const testimonials = document.querySelector(".testimonials__list");

  gsap.matchMedia().add("(min-width: 568px)", () => {
    gsap.timeline().fromTo(animTopText, {
      y: 50,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, "period-1")
      .to(animTopButton, {opacity: 1}, "period-2")
      .to(animTopTopic, {opacity: 1}, "period-2")
      .fromTo(circle, {
          width: "42.1rem",
          height: "42.1rem",
        }, {
          width: "62.1rem",
          height: "62.1rem"
        }, "period-1"
      )
      .fromTo(topImg, {
          x: "20rem",
          y: "20rem",
        }, {
          x: 0,
          y: 0
        }, "period-1"
      )

    gsap.from(testimonials, {
      scrollTrigger: {
        trigger: testimonials,
      },
      y: "20rem",
      opacity: 0
    })

  })
}