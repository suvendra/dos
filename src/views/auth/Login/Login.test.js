import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import { renewbuyApiRouter } from '../../../../api/appApiManager';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
  
  renewbuyApiRouter("login", {
    email: "bshubham102@gmail.com",
    password: "Qwerty@123"
  }).then(data => {
    console.log(data);
  })
});


