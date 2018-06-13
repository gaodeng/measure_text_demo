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
  View
} from 'react-native';
import MeasureText from 'react-native-measure-text';
const textWidth = 182
const fontSize = 14;
const fontFamily = 'Arial';
const fontWeight = '500';
export default class App extends Component {
  constructor(props) {

    super(props)
    this.state = { 
      str: 'Why the end of net neutrality might look good ... at first'
    }
  }

  componentDidMount() {

    const heights = MeasureText.heights({
      texts: [this.state.str],
      width: textWidth,
      fontSize,
      fontWeight,
      fontFamily /* fontFamily is optional! */
    }).then(results => {
      this.setState({ measured: results[0]})
    })

  }

  render() {
    return (
      <View style={{marginTop:100,padding:20}}>
        <View style={{ width: textWidth }}>

        <Text>layout</Text>
          <Text style={styles.text} onLayout={(e) => {
            this.setState({
              layout: e.nativeEvent.layout
            })
          }}>
            {this.state.str}
          </Text>


          <Text>measured</Text>
          <Text ref='measuredText' style={[styles.text, { backgroundColor: 'blue', height: this.state.measured }]}>
            {this.state.str}
          </Text>
        </View>

        <View style={{ marginTop: 40}}>
          <Text style={{ borderWidth: 1 }}>layout:{JSON.stringify(this.state.layout)}</Text>
          <Text style={{ borderWidth: 1 }}>measured:{this.state.measured}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    fontFamily: fontFamily,
    fontSize: fontSize,
    backgroundColor: 'red',
    fontWeight: fontWeight
  },

});
