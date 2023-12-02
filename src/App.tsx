import React, { useState } from 'react';
import FormCaptura from './components/FormCaptura';
import FormPintar from './components/FormPintar';
import ListarServicio from './components/ListarServicio';

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
      <ListarServicio />
    </div>
  );
};

export default App;
