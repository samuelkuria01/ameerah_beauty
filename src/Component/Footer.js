import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footercontainer'>
        <div>

        
        <div className='firstfootcont'>

        <div className='footone'>
            <div className='headfooter'>
            <h2>AMEERAH</h2>
            <h3><span>ORGANICS</span></h3>
            </div>
        
            <div>
            <p>Dealings in the purest herbal products extracts for a perfect skin.</p>
            </div>
        </div>

        <div className='contfoot'>
            <p>Contact Us</p>
            <div>
            <input className='inputfooter' type='text' name='lasttname' placeholder='Full Name...'></input>
            </div>
            {/* <label for="subject">Subject</label> */}
            <textarea className='textfooter' id="subject" name="subject" placeholder="Write something.." ></textarea>
            <input className='submitbtn' type="submit"  />
        </div>

      </div>

      <div className='linkup'>
        <div className='linkupcontainer'>
        <div className='linkupresou'>
        <div>
            <h2>Resources</h2>
            <p><Link>About us</Link></p>
            <p><Link>Blog</Link></p>
            <p><Link>Our Partners</Link></p>
            <p><Link>Contact us</Link></p>
        </div>
        <div>
            <h2>Socials</h2>
            <p><Link>LinkedIn</Link></p>
            <p><Link>Twitter</Link></p>
            <p><Link>Instagram</Link></p>
            <p><Link>Facebook</Link></p>
        </div>
        </div>
        <div>
        <img className='footoneimg' alt='bingiman' src='../Images/footerone.png'></img>
        </div>
        </div>
      </div>

      <div className='footerimg'>
        <div>
            <img className='foottwoimg' alt='bingiman' src='../Images/footertwo.png'></img>
        </div>
       
      </div>
      </div>
    </div>
  )
}

export default Footer
