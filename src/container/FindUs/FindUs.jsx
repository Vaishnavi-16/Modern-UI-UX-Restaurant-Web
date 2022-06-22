import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem', color: '#e3d1b3' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans" style={{ color: '#a18968' }}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className="p__cormorant" style={{ color: '#e3d1b3', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans" style={{ color: '#a18968' }}>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans" style={{ color: '#a18968' }}>Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem', color: '#e3d1b3' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
