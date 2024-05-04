'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './page.module.css';

function App() {
  const [signos, setSignos] = useState([]);

  useEffect(() => {
    const fetchSignos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/signos');
        setSignos(response.data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchSignos();

    const interval = setInterval(fetchSignos, 13000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>HealthSync</h1>
      <div className={styles.monitor}>
        {signos.map((signo, index) => (
          <div key={index} className={styles.signoContainer}>
            <p className={styles.signo}>Temperatura: {signo.Temperatura}</p>
            <p className={styles.signo}>Presión Arterial Media: {signo.Presionarterialmedia}</p>
            <p className={styles.signo}>Frecuencia Cardíaca: {signo.Frecuenciacardiaca}</p>
            <p className={styles.signo}>Glucosa: {signo.Glucosa}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
