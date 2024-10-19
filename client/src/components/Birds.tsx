import React, { useState, useEffect, useRef } from "react"
import BIRDS from "vanta/dist/vanta.birds.min" // Correct import for 'birds'

const Birds = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current, // Use ref instead of an ID
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 100.0,
          minWidth: 100.0,
          quantity: 5,
          scale: 1.2,
          //   speedLimit: 4,
          scaleMobile: 1.0,
          backgroundColor: 0x0,
          birdSize: 2.5,
          wingSpan: 12.0,
          speedLimit: 4.0,
          separation: 54.0,
          alignment: 38.0,
          cohesion: 96.0,
        }),
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy() // Clean up the effect
    }
  }, [vantaEffect])

  return (
    <div
      ref={myRef} // Attach the ref here
      style={{ width: "100%", height: "100vh" }} // Full-screen effect
      className="z-0"
    ></div>
  )
}

export default Birds
