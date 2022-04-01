import React, {useState} from 'react';
import '../App.css';
import { sliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const Home = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current -1)
  }


if(!Array.isArray(slides) || slides.length <= 0){
  return null;
}

  return (
    <><div className='headText'>
    <h1>The Ultimate Designer Clothing Brand</h1>
  </div>
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
    {sliderData.map((slide, index) => {
      return (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && (<img src={slide.image} alt="model" className="image" />)}
          
        </div>
      )
    })}
    </section></>
  )
}

export default Home;