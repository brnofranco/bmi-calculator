import React, { useState } from 'react';
import './styles.css';
import { Form } from '../../components/Form';
import  { Header } from '../../components/Header';
import { Table } from '../../components/Table';

export function Home() {
  
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  
  return (
    <section className="container">
      <aside>
        <Header/>
        <h2 className="sub-title"> Fill the fields and see your result </h2>
      </aside>
      <main>
          <Form w={weight} sw={setWeight} h={height} sh={setHeight} />
          <Table/>
      </main>
    </section>
  );
}
