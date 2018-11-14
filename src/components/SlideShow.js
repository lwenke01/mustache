import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import up from '../assets/up.png';
import down from '../assets/down.png';
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

    changeCount(action) {
        if(action === 'up') {
            const c = this.state.counter + 1;
            this.setState({ counter: c });
        } else {
            if(this.state.counter === 1 || this.state.counter === 0) {
                this.setState({ counter: 0 });
            } else {
                const c = this.state.counter - 1;
                this.setState({ counter: c });
            }
        }
    };

    render() {
        return (
            <Carousel>
                <div>
                    <img src={img1} />
                    <p className="legend">
                        <a onClick={() => { this.changeCount('up') }}>UP </a>
                         - {this.state.counter} -
                        <a onClick={() => { this.changeCount('down') }}> DOWN</a>
                        </p>
                    {/*<p className="vote">{this.state.counter}*/}
                        {/*<img onClick={() => { this.changeCount('up') }} className="vote-icon" src={up} />*/}
                        {/*<img onClick={() => { this.changeCount('down') }} className="vote-icon" src={down} />*/}
                    {/*</p>*/}
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
