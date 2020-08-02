import React from 'react';

import Notes from './views/Notes/Notes';
import Layout from './components/Layout/Layout';
import './App.scss';

function App() {
  return (
    <Layout>
      <Notes />
    </Layout>
  );
}

export default App;
