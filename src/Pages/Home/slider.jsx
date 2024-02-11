import React from "react";
import Slider from "react-slick";
import Project from "./project";


let data = [

  {

      "src":"./img/motorbike.png",
      "title":"Motorcycle booking",
      "description":"Motorcycle appointment is a web platform designed for enthusiasts of motorcycles. It provides an opportunity to explore the newest models from top brands and make reservations for thrilling rides.",
      "link":"https://github.com/fatmahussein/book-an-appointment",
      "demo":"https://motorcycle-lksr.onrender.com/"
  },

  {

      "src":"./img/awesome.png",
      "title":"Awesome Books",
      "description":"A book app that adds a book and it's author, edits the book or author and deletes the book, built using HTML , CSS and JavaScript.Awesome books App for awesome people.",
      "link":"https://github.com/fatmahussein/Awesome-books-with-ES6",
      "demo":"https://fatmahussein.github.io/Awesome-books-with-ES6/public/index.html?"
  },

  {

      "src":"./img/spaxe.png",
      "title":"Space Traveller's Hub",
      "description":"lorem ",
      "link":"https://github.com/fatmahussein/space-travellers-hub",
      "demo":"https://space-travellers-hub2023.netlify.app/"
  },
  {

      "src":"./img/spaxe.png",
      "title":"Space Traveller's Hub",
      "description":"lorem",
      "link":"https://github.com/fatmahussein/space-travellers-hub",
      "demo":"https://space-travellers-hub2023.netlify.app/"
  }

];

var settings = {
  className: "center",
  centerMode: "true",
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 4,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        centerMode: "false",
        dots: false
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: "false"
      }
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: "false"
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 0,
        centerMode: "true",
        
      }
    }
  ]
};

const SliderComp = () => {

      let sliderProject = "";
      sliderProject = data.map((item,index) => (
        <Project item = {item} key={index} />
      ))
 
return (

        <><Slider {...settings}>
    {sliderProject}
      </Slider></>

    );
  }

  export default SliderComp;

