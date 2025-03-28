import React from 'react'
import banner from "../../public/banner.jpg"

export default function Banner() {
  return (
    <><div className="max-w-screen=2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className=" order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
        <div className='space-y-12'> <h1 className="text-4xl font-bold">
          Hello,welcome here to learn something <span className='text-pink-500'>new everyday</span>

        </h1>
        <p className='text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quaerat adipisci nemo maxime minima esse iure provident a, recusandae doloremque nostrum iste iusto exercitationem cumque, dolorem aperiam aspernatur! Perferendis, quas?</p>
        <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
  <input type="search" className="grow" placeholder="Enter your Email to Login" />
  
</label>
        </div>
        <button className="btn mt-6  btn-secondary">Secondary</button>

        
        
        </div>
        
        <div className="order-1 w-full md:w-1/2">
        <img src={banner} className='w-92 h-92' alt=""></img>
        
        </div>
    </div>
    </>
  )
}
