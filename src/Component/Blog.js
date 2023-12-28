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
          <img className='papayaimg' alt='blogim' src='data:image/jpeg;base64,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'></img>
        </div>
      </div>

      <div className='blogdata'>
        <div>
          <img className='papayaimg2' alt='blogim' src='https://5.imimg.com/data5/ANDROID/Default/2022/6/OV/NJ/JB/13210769/product-jpeg-500x500.jpg'></img>
        </div>

        <div className='blogstory1'>
        <h2>Benefits of activated charcoal</h2>
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
