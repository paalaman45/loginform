import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, FormGroup, Input, Label} from 'reactstrap';
function App() {

  return (
    <div className="my shadow p-5">
      <Form>
        <FormGroup>
          <h3 className="text-center">Login Form</h3>
        </FormGroup>
        <FormGroup>
          <Label>Username</Label>
          <Input type='email' placeholder='Enter username' required className='form-control'/>
        </FormGroup>
        <FormGroup>
            <Label>Password</Label>
            <Input type='password' required placeholder='Enter password' minLength="8"/>
        </FormGroup>
        <Input type='submit' name='Login'className='btn btn-block btn-primary'/>
      </Form>
    </div>
  );
}

export default App;
