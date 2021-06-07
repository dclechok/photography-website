import React from 'react';
import './Intro.css';

import imageOne from './images/img_1.jpg';
import imageTwo from './images/img_2.jpg';
import imageThree from './images/img_3.jpg';
import imageFour from './images/img_4.jpg';
import imageFive from './images/img_5.jpg';
import imageSix from './images/img_6.jpg';
import imageSeven from './images/img_7.jpg';
import imageEight from './images/img_8.jpg';
import imageNine from './images/img_9.jpg';

function Intro() {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-around contentDiv">
                <div className="row">
                    <div className="col-4 rmvPad">
                        <img src={imageOne} alt="beach" />
                    </div>
                    <div class="col-4 rmvPad">
                        <img src={imageTwo} alt="beach" />    
                    </div>
                    <div class="col-4 rmvPad">
                        <img src={imageThree} alt="beach" />    
                    </div>
                    <div className="col-4 rmvPad">
                        <img src={imageFour} alt="beach" />
                    </div>
                    <div className="col-4 rmvPad">
                        <img src={imageFive} alt="beach" />
                    </div>
                    <div className="col-4 rmvPad">
                        <img src={imageSix} alt="beach" />
                    </div>
                    <div className="col-4 rmvPad">
                        <img src={imageSeven} alt="beach" />
                    </div>
                    <div className="col-4 rmvPad">
                        <img src={imageEight} alt="beach" />
                    </div>
                    <div className="col-4 rmvPad">
                        <img src={imageNine} alt="beach" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Intro;