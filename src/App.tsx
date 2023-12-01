import './App.css';
import React, { useState } from 'react';
import FormCaptura from './components/FormCaptura';
import FormPintar from './components/FormPintar';

const App: React.FC = () => {
  const [capturedData, setCapturedData] = useState<any>(null);

  const handleFormSubmit = (data: any) => {
    setCapturedData(data);
  };

  return (
    <div>
      <h1>Formulario</h1>
      <FormCaptura onSubmit={handleFormSubmit} />
      {capturedData && <FormPintar data={capturedData} />}
    </div>
  );
};

export default App;
