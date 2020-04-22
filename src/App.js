import React from 'react';
import './App.css';

import { Header, Container, Segment, Divider, Button, Icon, Grid } from 'semantic-ui-react';

import Form from './components/Form.js';

function App() {
  return (
    <Container fluid textAlign='center'>
      <Header as='h1' color='orange' className='header' size='huge' content='Merge Conflicts 101' icon='github' textAlign='center' />
      <Segment className='form-segment' size='massive' placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <Form />
          </Grid.Column>
          <Grid.Column verticalAlign='middle'>
<<<<<<< HEAD
            <Button color='twitter' icon='twitter' content='Continue with Twitter' />
=======
>>>>>>> 450c676be745cb7e01849b4d5d55bab628551a14
            <Button color='google plus' icon='google' content='Continue with Google' />
          </Grid.Column>
        </Grid>
        <Divider vertical>Or</Divider>
      </Segment>
    </Container>
  );
}

export default App;
