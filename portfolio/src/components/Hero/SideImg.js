import React from 'react'
import '../static/style.css';
import RotatingText from './RotatingText'
import Language from './Language';

const SideImg = () => {
  return (
    <section className="wrapper">
        <div className="hero-img">
          <Language>
            <RotatingText/>
          </Language>
        </div>
    </section>
  )
}

export default SideImg