import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <div className="text-teal-400">
      <section className='hero text-teal-400'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='Dr.Maths Institute ' title='Best Online Education Expertise' />
            <p className="bg-black">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </div>
  )
}

export default Hero
