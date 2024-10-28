import React, { useEffect, useState } from 'react';
import { loadRemoteComponent } from '../utils/loadRemoteComponent';

const ContainerComponent = () => {
  const [PiechartComponent, setPiechartComponent] = useState(null);

  useEffect(() => {
    loadRemoteComponent("piechart", "./PiechartIndex")
      .then((module) => {
        if (module) {
          setPiechartComponent(() => module.default || module);
        }
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {PiechartComponent ? (
        <PiechartComponent />
      ) : (
        <div>Error loading Piechart component</div> // Fallback si falla
      )}
    </div>
  );
};

export default ContainerComponent;
