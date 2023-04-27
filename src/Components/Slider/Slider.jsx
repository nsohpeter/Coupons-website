import React from 'react'
import { useState, useEffect  } from "react";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { peopleData } from "../../productsData";
import './Slider.css'



const  Slider = () => {
 const [people, setPeople] = useState(peopleData)
 const [index, setIndex] = useState(0)


 const nextSlide = () =>{
   setIndex((prevPeople) =>{
    let index = prevPeople + 1;
    if(index > peopleData.length - 1){
      index = 0
    }
    return index;
   })

 }
 const prevSlide = () =>{
   setIndex((prevPeople) =>{
    let index = prevPeople - 1;
    if(index < 0){
      index =peopleData.length -1
    }
    return index;
   })
 }
 // useEffect(() => {
  //   const lastIndex = people.length - 1
  //   if (index < 0) {
  //     setIndex(lastIndex)
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0)
  //   }
  // }, [index, people])

  useEffect(()=>{
   let autoSlider = setInterval(()=>{
     setIndex((prevPeople) =>{
      let index = prevPeople + 1;
      if(index > peopleData.length - 1){
        index = 0
      }
      return index
     })
    }, 5000)
     return () =>{
      clearInterval(autoSlider)
     }
  }, [index])
  return (
    <div className="section">
      <People
      people = {people}
      index = {index}
      prevSlide = {prevSlide}
      nextSlide = {nextSlide}
      />
    </div>
  );
}

export default Slider;



const People = ({people, index, prevSlide, nextSlide }) => {

function getStarIcons(rating) {
    const fullStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;
    
    const stars = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} />);
    }
    
    for (let i = 0; i < halfStars; i++) {
      stars.push(<FaStarHalfAlt key={fullStars + i} />);
    }
    
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={fullStars + halfStars + i} />);
    }
    
    return stars;
  }


  return (
    <div className='section-center'>
        {people.map((person,personIndex) =>{
            const {id, image, title, old_price, price,rating, percentage_off,reviews} = person;
           let position = 'nextSlide';

           if(personIndex === index){
            position = 'activeSlide';
           }
           if(personIndex === index-1 ||
             (index === 0 && personIndex === people.length -1)){
            position = 'lastSlide'
           }

            return <article key={id} className={position}>
              <img src={image} alt={title}  className='product-img-1'/>
               
              <div className="slider-details">
                 <p className='title'>{title}</p>
                <div className="coupons-item-1">
                  <span style={{textDecoration:"line-through"}}> Gh{old_price}</span>
                  <span> Gh{price}</span>
                  <span>%{percentage_off} 0ff</span>
               </div>
               <div className="rating-review-1">
                  <span>{getStarIcons(rating)}</span>
                  <p>{reviews} reviews</p>
                </div>
              </div>
              
            </article>
        })}

        <button className='prev' onClick={()=> prevSlide()}>
            <ArrowBackIosNewIcon/>
        </button>
        <button className='next' onClick={()=> nextSlide()}>
            <ArrowForwardIosIcon />
        </button>
    </div>
  )
}