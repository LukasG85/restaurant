import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'
import car1 from '../images/car1.jpeg'
import car2 from '../images/car2.jpeg'
import car3 from '../images/car3.jpeg'

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel className="Slider">
        <div>
          <img src={car1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={car2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={car3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    )
  }
}

export default DemoCarousel
