import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Blog() {
  return (
    <div>
      <h2 className='blogcrown'>Be on The Know</h2>

      {/* <div className='blogdata'>
        <div>
          <img className='papayaimg' alt='blogim' src='../Images/papayaseedoil.jpg'></img>
        </div>

        <div className='blogstory'>
          <h2>Benefits of papaya seeds </h2>
          <h3>Brightens and Lightens Skin Complexion</h3>
          <p>. If your skin is feeling a little dull and lifeless, perk it up with papaya seed oil. Vitamin C and 
            carotene are contained within papaya seed oil.</p>
          <h3>Natural Exfoliant to puify the skin</h3>
          <p>. A natural exfoliating enzyme, papain helps to rejuvenate your complexion by sloughing off dead skin cells, 
            dirt and excessive oil.</p>
         
          <button className='readmore'>
            <Link>Read More</Link>
          </button>
        </div>
      </div> */}

      {/* <div className='blogdata'>
        <div>
          <img className='papayaimg2' alt='blogim' src='../Images/coconutoil.jpg'></img>
        </div>

        <div className='blogstory2'>
        <h2>Benefits of Coconut Oil </h2>
          <h3>Defending Skin from Damaging Microorganisms</h3>
          <p>. The fatty acids that coconut oil contains, namely lauric and capric acid, are fantastic at keeping skin healthy due
             to their antimicrobial</p>
          <h3>Coconut Oil for Dry Skin is Highly Moisturising</h3>
          <p>.  Coconut oil helps to hydrate skin and reinforce its natural defensive barrier to better retain moisture 
           </p>
          <button className='readmore'>
            <Link>Read More</Link>
          </button>
        </div>
      </div> */}

      <div className='blogdata'>
        <div>
          <img className='papayaimg2' alt='blogim' src='https://cdn.shopify.com/s/files/1/0296/7109/6453/files/benefits_of_coconut_oil.jpg?v=1692182810'></img>
        </div>

        <div className='blogstory1'>
        <h2>Benefits of Coconut Oil </h2>
          <h3>Defending Skin from Damaging Microorganisms</h3>
          <p>. The fatty acids that coconut oil contains, namely lauric and capric acid, are fantastic at keeping skin healthy due
             to their antimicrobial</p>
          <h3>Coconut Oil for Dry Skin is Highly Moisturising</h3>
          <p>.  Coconut oil helps to hydrate skin and reinforce its natural defensive barrier to better retain moisture 
           </p>
          <button className='readmore'>
            <Link>Read More</Link>
          </button>
        </div>
      </div>

      <div className='blogdata'>
        <div className='blogstory'>
        <h2>Benefits of papaya seeds </h2>
          <h3>Brightens and Lightens Skin Complexion</h3>
          <p>. If your skin is feeling a little dull and lifeless, perk it up with papaya seed oil. Vitamin C and 
            carotene are contained within papaya seed oil.</p>
          <h3>Natural Exfoliant to puify the skin</h3>
          <p>. A natural exfoliating enzyme, papain helps to rejuvenate your complexion by sloughing off dead skin cells, 
            dirt and excessive oil.</p>
          <button className='readmore'>
            <Link>Read More</Link>
          </button>
        </div>

        <div>
          <img className='papayaimg' alt='blogim' src='../Images/papayaseedoil.jpg'></img>
        </div>
      </div>

      <div className='blogdata'>
        <div>
          <img className='papayaimg2' alt='blogim' src='https://5.imimg.com/data5/ANDROID/Default/2022/6/OV/NJ/JB/13210769/product-jpeg-500x500.jpg'></img>
        </div>

        <div className='blogstory1'>
        <h2>Benefits of activated charcoal for skin</h2>
        <h3>Helps To Reduce Acne</h3>
          <p>. remove any impurities in the skin - which keeps your skin healthy and prevents the breakout of acne</p>
          <h3> Removes Impurities From Your Skin</h3>
          <p>. is highly porous, which means it can draw out impurities from your skin. In simpler terms, it sucks out all the dirt!</p>
          <button className='readmore'>
            <Link>Read More</Link>
          </button>
        </div>
      </div>


      <div className='blogdata'>
        <div className='blogstory'>
        <h2>Benefits of papaya seeds </h2>
          <h3>Brightens and Lightens Skin Complexion</h3>
          <p>. If your skin is feeling a little dull and lifeless, perk it up with papaya seed oil. Vitamin C and 
            carotene are contained within papaya seed oil.</p>
          <h3>Natural Exfoliant to puify the skin</h3>
          <p>. A natural exfoliating enzyme, papain helps to rejuvenate your complexion by sloughing off dead skin cells, 
            dirt and excessive oil.</p>
          <button className='readmore'>
            <Link>Read More</Link>
          </button>
        </div>

        <div>
          <img className='papayaimg3' alt='blogim' src='https://c.ndtvimg.com/0ds86cj8_neem-twigs_625x300_09_August_18.jpg?downsize=320:197'></img>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Blog
