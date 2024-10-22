import React, { useState } from 'react';
import data from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [value, setValue] = useState(0)
  const { id, name,job,image, text } = data[value]

  const constantValue = (number) => {
    if (number > data.length - 1) {
      return 0
    }
    if (number < 0) {
      return data.length - 1
    }
    return number
  }

  const increaseValue = () => {
    setValue((value) => {
      let newValue = value + 1
      return constantValue(newValue)
    })
  }

  const decreaseValue = () => {
    setValue((value) => {
      let newValue = value - 1
      return constantValue(newValue)
    })
  }

  const randomPerson = () =>{
    let randomNumber = Math.floor(Math.random() * (data.length - 1)) 
   if (randomNumber === value) {
     randomNumber = value + 1
   }
   setValue(constantValue(randomNumber))
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={decreaseValue}>
          <FaChevronLeft/>
        </button>
        <button className="prev-btn" onClick={increaseValue}>
          <FaChevronRight/>
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  )
};

export default Review;
