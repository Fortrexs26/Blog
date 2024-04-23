/* eslint-disable no-unused-vars */
import React from 'react'
import { getImageUrl } from '../../utils';
import style from "./Hero.module.css";

export const Hero = () => {
  return ( 
  <section className= {style.container}>
    <div className= {style.content}>
        <h1 className= {style.title}>Hi, Im Rex</h1>
        <p className={style.description}> I'm a Front End Developer with experience of ReactJS. Reach me out if you'd like to learn more!</p>
        <a href="mailto:nrexnagrama@gmail.com" className={style.contactBtn}>Contact Me</a>
    </div>
    <img src= {getImageUrl("hero/Me2.png")} alt='Hero image of me' className={style.heroImg}/>

        <div className= {style.topBlur}/>
        <div className={style.bottomBlur}/>
  </section>
  );
};
