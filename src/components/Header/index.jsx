import React from 'react';

import './styles.css';

import logo from '../../images/logo.png';

export const Header = () => (
    <header className="header">
        <img src={logo} alt="BMI Calculator"/>
        <h2 className="sub-title"> Fill in the following fields with your information and see your result </h2>
    </header>
)