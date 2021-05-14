import React from 'react';
import './Gallery.css';

import imageOne from './images/img_1.jpg';
import imageTwo from './images/img_2.jpg';
import imageThree from './images/img_3.jpg';
import imageFour from './images/img_4.jpg';
// import imageOne from './images/img_1.jpg';
// import imageOne from './images/img_1.jpg';
// import imageOne from './images/img_1.jpg';
// import imageOne from './images/img_1.jpg';
// import imageOne from './images/img_1.jpg';
// import imageOne from './images/img_1.jpg';
// import imageOne from './images/img_1.jpg';
// import imageOne from './images/img_1.jpg';



function Gallery() {
    return (
        <main>
            <div className="d-flex justify-content-around">
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
                </div>
            </div>

        </main>
    );
}

export default Gallery;