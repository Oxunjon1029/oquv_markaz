import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';

import {Provider} from "react-redux";
import {ChangeLang} from './Oxunjon/Reducers/ChangeLang';
import { SignInProvider } from './Oxunjon/SignIn/SignInContext';
import { TestBankProvider } from './components/Test/TestBankProvider';
const store = createStore(ChangeLang)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TestBankProvider>
        <SignInProvider>
            <App />
      </SignInProvider>
    </TestBankProvider>
    </Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
