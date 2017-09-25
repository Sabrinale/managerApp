import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
//import LoginForm from './Components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCa6G2ysLPw_IcZMqQtmZIxFJNvjcCuN3Y',
      authDomain: 'manage-20e92.firebaseapp.com',
      databaseURL: 'https://manage-20e92.firebaseio.com',
      projectId: 'manage-20e92',
      storageBucket: '',
      messagingSenderId: '983241190028'
    };
    firebase.initializeApp(config);
  }

  render() { 
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
       <Router />
      </Provider>
    );
  }
}

export default App;
