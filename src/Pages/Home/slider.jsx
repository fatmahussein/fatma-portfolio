import React, { Component } from "react";
import Slider from "react-slick";
import Project from "./project";


export default class Sliders extends Component {

  let data = [

      {
          "id":0,
          "src":"./img/motorbike.png",
          "title":"Motorcycle booking",
          "description":"Motorcycle appointment is a web platform designed for enthusiasts of motorcycles. It provides an opportunity to explore the newest models from top brands and make reservations for thrilling rides.",
          "link":"https://github.com/fatmahussein/book-an-appointment",
          "demo":"https://motorcycle-lksr.onrender.com/"
      },

      {
          "id":1,
          "src":"./img/awesome.png",
          "title":"Awesome Books",
          "description":"A book app that adds a book and it's author, edits the book or author and deletes the book, built using HTML , CSS and JavaScript.Awesome books App for awesome people.",
          "link":"https://github.com/fatmahussein/Awesome-books-with-ES6",
          "demo":"https://fatmahussein.github.io/Awesome-books-with-ES6/public/index.html?"
      },

      {
          "id":2,
          "src":"./img/spaxe.png",
          "title":"Space Traveller's Hub",
          "description":"lorem ",
          "link":"https://github.com/fatmahussein/space-travellers-hub",
          "demo":"https://space-travellers-hub2023.netlify.app/"
      },
      {
          "id":3,
          "src":"./img/spaxe.png",
          "title":"Space Traveller's Hub",
          "description":"lorem",
          "link":"https://github.com/fatmahussein/space-travellers-hub",
          "demo":"https://space-travellers-hub2023.netlify.app/"
      }

  ];
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const SliderData = () => {
      let sliderProject = "";
      sliderProject = data.map((item,index) => (
        <Project item = {item} key={index} />
      ))}
    };
    return (

        <><Slider {...settings}>
    {sliderProject}
      </Slider></>

    );
  }
}
