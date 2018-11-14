import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';

class SlideShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter : 0,
    };
        this.changeCount = this.changeCount.bind(this);

    }

    changeCount() {
        console.log('hey this is working');
    };

    render() {
        return (
            <Carousel>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img  src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

export default SlideShow;
