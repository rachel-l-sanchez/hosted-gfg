import React from 'react';
import {bounce} from 'react-animations';
import styled, {keyframes} from 'styled-components';
import Resume from '../components/static/RachelSanchezResume.pdf'
import Skills from './Skills';

const About = () => {


const bounceAnimation = keyframes`${bounce}`;

const BouncyH1 = styled.h1`
  animation: 1s ${bounceAnimation};
`;

    return (
      <section id="about">
        <div className="container mx-auto d-flex flex-row text-center">
          <div className="d-flex flex-col text-left justify-content-center text-center">
            <BouncyH1>
              Hi, I'm Rachel
            </BouncyH1>
    
            <a href={Resume} download>
                <button className="btn text-white fs-4 fw-bold">
                  Download CV
                </button>
              </a>
            <p className="mb-8 ">
            Over the past year, an idea was growing to increase my knowledge of technology, 
            utilize my creative skills and pivot to software development. I started with Python tutorials, freecodecamp, 
            and books to see all that could be learned. (I mean really, who doesn't love something named after the classic comedy troupe, Monty Python?). 
            Since then, I've been excited to explore a new avenue. I'm learning new things daily and pursuing 
            what I see as a creative aspect in my life and a new career path.
            I love applying Agile principles and watching a project come to life. I specialize in Python and quickly
             learning new technologies and programming languages. I'm a problem solver, perfectionist, 
             and always apply object-oriented design. As of now I've been learning Python and Javascript. 
             I'm currently reading the Pragmatic Programmer, Clean Code and fiercely grabbing onto new languages and frameworks.
            </p>
            <div className="slider col-6 pt-5" id="stats_about">
            <div className="mb-3">
                    <span className="fw-bold fs-6"></span>
                    <div className="slider">
                      <div
                        className="inner-slider">
                        <Skills/>
                      </div>
                    </div>
                  </div>
          </div>
        </div>
        </div>
      </section>
    );
  }

export default About;