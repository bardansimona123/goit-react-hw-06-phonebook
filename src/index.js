import React from 'react';
import ReactDOM from 'react-dom/client'; // Folosește 'react-dom/client' pentru createRoot
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store'; // Asigură-te că imporți ambele
import App from './components/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react'; // Adaugă PersistGate

const root = ReactDOM.createRoot(document.getElementById('root')); // Creează root

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> {/* Înfășoară cu PersistGate */}
      <App />
    </PersistGate>
  </Provider>
);


