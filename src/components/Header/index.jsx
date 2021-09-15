import React from 'react';

import './styles.scss';

import logo from '../../images/logo.png';
import scale from '../../images/scale.png';

export const Header = () => (
    <header className="header">
        <img src={logo} className="logo" alt="BMI Calculator"/>
        <img src={scale} className="scale" alt="Scale Weight"/>
        <h2 className="sub-title"> Fill out the following fields with your information and see your result </h2>
    </header>
)