import React, { useState } from 'react';
import './styles.scss';
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
      </aside>
      <main>
        <Form weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} />
        <Table/>
      </main>
    </section>
  );
}
