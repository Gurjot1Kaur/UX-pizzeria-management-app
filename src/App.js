import { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Inventory from './Inventory';
import Login from './Login';
import OrderStatus from './OrderStatus';

function App() {
  // screen number as state
  /**
   * 0 - login
   * 1 - Dashboard
   * 2 - Order Status
   * 3 - Inventory
   */
  const [screen, setScreen] = useState(0);

  // callback to update screen number
  const updateScreen = (value) => {
    setScreen(value);
  };

  return (
    <>
      <h1 className="headline">Pizzeria Management App</h1>
      {screen == 0 && <Login updateScreen={updateScreen}/>}
      {screen == 1 && <Dashboard updateScreen={updateScreen}/>}
      {screen == 2 && <OrderStatus updateScreen={updateScreen}/>}
      {screen == 3 && <Inventory updateScreen={updateScreen}/>}

    </>
  );
}

export default App;
