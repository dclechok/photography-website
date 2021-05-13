import React from 'react';

import './Gallery.css';

function Gallery() {
    return (
        <main>
            <div className="d-xl-flex justify-content-around">
                <div className="row">
                    <div className="col-4 border">
                        <img src="../images/img_1.jpg" alt="beach" />
                    </div>
                    <div class="col-4 border">
                        <img src="../images/img_2.jpg" alt="beach" />    
                    </div>
                    <div class="col-4 border">
                        <img src="../images/img_3.jpg" alt="beach" />    
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Gallery;