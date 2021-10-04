import React from 'react';
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.jpg'
import img3 from '../../images/3.jpg'
import img4 from '../../images/4.jpg'
import img5 from '../../images/5.jpg'
import img6 from '../../images/6.jpg'
import img7 from '../../images/7.jpg'
import img8 from '../../images/8.jpg'
import img9 from '../../images/9.jpg'
import './Gallery.css'
const Gallery = () => {
    return (
        <section className="gallery mt-28">
            <div className="box-container">
              <div className="img-box">
                  <img src={img1} alt="" />
              </div>
              <div className="img-box">
                  <img src={img2} alt="" />
              </div>
              <div className="img-box">
                  <img src={img3} alt="" />
              </div>
              <div className="img-box">
                  <img src={img4} alt="" />
              </div>
              <div className="img-box">
                  <img src={img5} alt="" />
              </div>
              <div className="img-box">
                  <img src={img6} alt="" />
              </div>
              <div className="img-box">
                  <img src={img7} alt="" />
              </div>
              <div className="img-box">
                  <img src={img8} alt="" />
              </div>
              <div className="img-box">
                  <img src={img9} alt="" />
              </div>
            </div>
        </section>
    );
};

export default Gallery;