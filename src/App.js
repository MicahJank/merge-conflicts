import React from 'react';
import './App.css';

import { Header, Container } from 'semantic-ui-react';

import Form from './components/Form.js';

function App() {
  return (
    <Container fluid textAlign='center'>
      <Header className='header' size='huge' content='Merge Conflicts 101' icon='github' textAlign='center' />
      <Form />
    </Container>
  );
}

export default App;
