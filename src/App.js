import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Table from './components/Table';

const formWeight = (w, sw) => {
  return(
    <div>
      <input type="text" placeholder="Weight (kg)" value={w} onChange={(e) => sw(e.target.value)}/>
    </div>
  )
}

const formHeight = (h, sh) => {
  return(
    <div>
      <input type="text" placeholder="Height (meters)" value={h} onChange={(e) => sh(e.target.value)}/>
    </div>
  )
}

const formResult = (w, h) => {
  const calc = (w / (h * h));

  const status = (calc) => {
    if (calc < 18.5) {
      return 'Underweight';
    } else if (calc >= 18.5 && calc < 24.9) {
      return 'Normal or Healthy Weight';
    } else if (calc >= 25 && calc < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }

  return (
    <div>
      <p> Result: </p>
      <p> {calc.toFixed(1)} </p>
      <p> {status(calc)} </p>
    </div>
  )
}

export default function App() {
  
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  
  return (
    <>
      <Header/>
      {formWeight(weight, setWeight)}
      {formHeight(height, setHeight)}
      {formResult(weight, height)}
      <br/>
      <Table/>
      <Footer/>
    </>
  );
}
