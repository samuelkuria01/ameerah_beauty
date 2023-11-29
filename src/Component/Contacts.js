import React from 'react'
import Footer from './Footer'

function Contacts() {
  return (
    <div>
      

      <div className='contactus'>
        <form className='form1'>
         <div className='contheader'>
          <h2>Contact Info</h2>
        </div>
          <div className='firstesoteric'>
          <label>First Name</label>
          <input type='text' name='firstname' placeholder='First Name...'></input>
        
          <label>Last Name</label>
          <input type='text' name='lasttname' placeholder='Last Name...'></input>

          </div>
          
          <div className='secondesoteric'>
          <label>Phone Number</label>
          <input type='number' name='phonenumber' placeholder='Phone Number...'></input>
        
          </div>

            <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

    <input className='submitbtn' type="submit"  />

        </form>

        <div className='contvector'>
          <img className='contactvector' src='../Images/contacts.png' alt='gogogo'></img>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Contacts
