/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

let defaultImg = {
      uri: 'https://video-react.js.org/assets/logo.png'
    };

class Img extends Component {

  constructor(props) {
      super(props);
      this.state = {showImg: true};

      // Toggle the state every second
      setInterval(() => {
        this.setState(previousState => {
          return { showImg: !previousState.showImg };
        });
      }, 1000);
    }

  render() {
    let s = this.state.showImg ? this.props.src : defaultImg;
    let t = this.state.showImg ? "Image" : "Default Image";
    return (
      <View style={styles.container}>
        <Image source={s} style={{width: 100, height: 100}}/>
        <Text style={styles.instructions}>
          {t}
        </Text>
      </View>
    );
  }
}

let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Img src={pic} />
        <Img src={pic} />
        <Img src={pic} />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Hej, Sheko ...
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
