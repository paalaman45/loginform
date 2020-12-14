import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormGroup, Input, Label} from 'reactstrap';


const password =(props) =>{
    return(
        <FormGroup>
            <Label>Password</Label>
            <Input type='password' required placeholder='Enter password' minLength="8"/>
        </FormGroup>
    );
}

export default password;