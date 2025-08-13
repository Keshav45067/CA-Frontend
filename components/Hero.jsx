import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero(){
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' }})

    tl.from(titleRef.current, { y: 50, opacity: 0, duration: 0.9 })
      .from(subtitleRef.current, { y: 30, opacity: 0, duration: 0.8 }, '-=0.6')
      .from(ctaRef.current, { scale: 0.9, opacity: 0, duration: 0.6 }, '-=0.4')

    // Parallax background on scroll
    gsap.to(heroRef.current, {
      backgroundPosition: '50% 20%',
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })
  }, [])

  return (
    <header ref={heroRef} id="home" className="bg-hero min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-32 text-white">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-extrabold leading-tight">Event Title Placeholder</h1>
        <p ref={subtitleRef} className="mt-6 text-xl md:text-2xl max-w-2xl">A short catchy subtitle that matches the video. Replace this with real copy.</p>
        <div ref={ctaRef} className="mt-8">
          <a href="#features" className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-full shadow-lg">Explore</a>
        </div>
      </div>
    </header>
  )
}