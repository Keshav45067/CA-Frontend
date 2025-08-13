import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SectionFeature({reverse=false, title="Title", text="Text", img='/placeholder-2.jpg'}){
  const ref = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const el = ref.current
    gsap.from(imageRef.current, {
      x: reverse ? 100 : -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
      }
    })

    gsap.from(contentRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.15,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
      }
    })
  }, [reverse])

  return (
    <section ref={ref} className="py-24 container mx-auto px-6 flex flex-col md:flex-row items-center gap-12" id="features">
      <div className={`${reverse? 'md:order-2' : ''} md:w-1/2`}>
        <img ref={imageRef} src={img} alt="placeholder" className="rounded-xl shadow-xl" />
      </div>
      <div ref={contentRef} className="md:w-1/2 text-primary">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg leading-relaxed">{text}</p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-accent text-white rounded-full">Learn more</button>
        </div>
      </div>
    </section>
  )
}