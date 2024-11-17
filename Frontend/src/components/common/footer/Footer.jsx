import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo text-teal-400'>
            <h1>Dr.Maths Institute</h1>
            <span>An institute of Mathematical Science</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <a href="https://www.instagram.com/mrrr._chaturvedi/">
            <i className='fab fa-facebook-f icon'></i>
            </a>

            <a href="https://www.instagram.com/mrrr._chaturvedi/">
            <i className='fab fa-instagram icon'></i>
            </a>

            <a href="https://www.youtube.com/@Dr.MathsInstitute">
            <i className='fab fa-youtube icon'></i>
            </a>
            
          </div>
          <div className='box link text-teal-400'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link text-teal-400'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box text-teal-400'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last text-teal-400'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                H4A 2nd floor main road Kalkaji South Delhi 110019
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91-8178357951
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                vikkytrigun@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | This template is made with <i className='fa fa-heart'></i> by Vinayak Chaturvedi
        </p>
      </div>
    </>
  )
}

export default Footer