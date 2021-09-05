import React from 'react';
import { Header, Sidebar, Content } from './components';

import './css/app.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
