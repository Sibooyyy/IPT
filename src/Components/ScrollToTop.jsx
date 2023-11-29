import React from 'react'
import { useEffect, useState } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowUp} from "@fortawesome/free-solid-svg-icons"



function ScrollToTop() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setBackToTopButton(true)
            } else{
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div className='button'>
        {backToTopButton && (
            <button style={{
                position: "fixed",
                bottom: "30px",
                right: "30px",
                height: "40px",
                width: "40px"
            }} onClick={scrollUp}><FontAwesomeIcon icon={faArrowUp} /></button>
        )}
    </div>
  )
}

export default ScrollToTop