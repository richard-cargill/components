import React from 'react';
import EmailInput from 'ps-react/EmailInput';

/** Optional Email input */
export default class ExampleOptional extends React.Component {
  render() {
    return (
      <EmailInput
        htmlId="example-optional"
        label="Email"
        name="email"
        onChange={() =>{}}
      />
    )
  }
}
