import React, { Component } from 'react'
import { View, Text as RNText, StyleSheet, Image } from 'react-native'

import toffee from '../../../assets/images/toffee.png'

export default class Coins extends Component {
  state = {
    conisArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }

  _renderSvgWheel = () => {
    const { conisArr } = this.state
    return (
      <View style={styles.coinsContainer}>
        {conisArr.map((item, index) => {
          return <Image key={index} source={toffee} style={styles.candyImg} />
        })}
      </View>
    )
  }

  render() {
    return (
      <View style={styles.contianer}>
        {this._renderSvgWheel()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  coinsContainer: {
    width: '100%',
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 120
  },
  candyImg: {
    width: 50,
    height: 50,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: '16.6%',
    marginBottom: 10
  }
})
