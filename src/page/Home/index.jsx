import React, { useState } from 'react';
import './styles.css';
import { Footer } from '../../components/Footer';
import { Form } from '../../components/Form';
import  { Header } from '../../components/Header';
import { Table } from '../../components/Table';

export function Home() {
  
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  
  return (
    <section className="container">
      <Header/>
      <Form w={weight} sw={setWeight} h={height} sh={setHeight} />
      <br/>
      <Table/>
      <Footer/>
    </section>
  );
}
