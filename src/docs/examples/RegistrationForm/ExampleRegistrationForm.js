import React from 'react';
import RegistrationForm from 'ps-react/RegistrationForm';

/** 100% progress and height of 20px */
export default class ExampleRegistrationForm extends React.Component {
  onSubmit = (user) => {
    console.log(user);
  }

  render() {
    return <RegistrationForm onSubmit={this.onSubmit} />
  }
}
