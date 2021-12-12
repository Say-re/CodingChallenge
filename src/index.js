//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from './components/forms/textInput';

const App = () => {
  return (
    <div>
      <h1>Testing</h1>
      <TextInput />
    </div>

  )
};

ReactDOM.render(<App />, document.getElementById('appMaster'));