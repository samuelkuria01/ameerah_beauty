import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function About() {
  return (
    <div className='aboutpage'>
      <div className='aboutfirsthead'>
      <h2>About us</h2>
      </div>

      <div className='firstquartz'>
        <div className='firstimg'>
            <img alt='imggg' src="../Images/mydoc.png"></img>
        </div>

        <div className='aboutstory'>
          <h2> Our Doctors</h2>
          <p> completed a Herbal Apprenticeship course under the supervision of Valmai Becker from Phytofarm and as a formally trained Landscape Architect (BLA Hons). I have been working with plants since 1998. 
            Since completing the Herbal Apprenticeship I have completed numerous aromatherapy and cosmetic manufacturing courses.
             When creating my natural skincare products,  your safety is my priority.Plant & Share was a natural progression for me given my passion to create simple and fresh skincare products from
            the garden that would nurture and care for my family.I am focused on creating safe, natural skincare products for mothers, babies and families.</p>
        </div>
      </div>

      <div className='secondquartz'>
        <div className='aboutstory2 '>
          <h2> Quality of our products</h2>
          <p> completed a Herbal Apprenticeship course under the supervision of Valmai Becker from Phytofarm and as a formally trained Landscape Architect (BLA Hons). I have been working with plants since 1998. 
            Since completing the Herbal Apprenticeship I have completed numerous aromatherapy and cosmetic manufacturing courses.
             When creating my natural skincare products,  your safety is my priority.Plant & Share was a natural progression for me given my passion to create simple and fresh skincare products from
            the garden that would nurture and care for my family.I am focused on creating safe, natural skincare products for mothers, babies and families.</p>
        </div>

        <div className='secondimg'>
            <img className='qualityproduct' alt='imggg' src="https://imc.net.vn/wp-content/uploads/2022/11/sa--n-pha----m-co---nguo----n-go----c-tu-----thie--n-nhie--n.jpeg"></img>
        </div>
      </div>


      <div className='firstquartz'>
        <div className='firstimg'>
            <img className='processimg' alt='imggg' src="../Images/theprocess.jpg"></img>
        </div>

        <div className='aboutstory'>
          <h2> The Process</h2>
          <p> completed a Herbal Apprenticeship course under the supervision of Valmai Becker from Phytofarm and as a formally trained Landscape Architect (BLA Hons). I have been working with plants since 1998. 
            Since completing the Herbal Apprenticeship I have completed numerous aromatherapy and cosmetic manufacturing courses.
             When creating my natural skincare products,  your safety is my priority.Plant & Share was a natural progression for me given my passion to create simple and fresh skincare products from
            the garden that would nurture and care for my family.I am focused on creating safe, natural skincare products for mothers, babies and families.</p>
        </div>
      </div>

      <div className='getintouch'>
        <div>
          <h2>Want to know more about <span className='touchameerah'> Ameerah Organic Beauty?</span>  Feel free to contact us</h2>
        </div>

        <div>
          <button> 
            <Link to='/contact'>Get In Touch</Link>
            </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
