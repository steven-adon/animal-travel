import React from 'react';
import { AsyncStorage, Button, StyleSheet, Text, View, Image } from 'react-native';
import CircleProgress from '../../components/CircleProgress/CircleProgress';


import Coins from '../../components/Coins/Coins'
import CANDY  from '../../../assets/images/candy.png';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!'
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.toolBtns}>
          <Button title="Show me more of the app" onPress={this._showMoreApp} />
          <Button
            title="Actually, sign me out :)"
            onPress={this._signOutAsync}
          />
        </View>

        <View style={styles.coins}>
          <Coins />
        </View>


        <View style={styles.circleProgress}>
          <CircleProgress
            size={220}
            progress={0.6}
            color={'red'}
            notFilledColor={'white'}
          >

            <Image source={CANDY} style={styles.scale}/>
            {/* <Text>My Candy!</Text> */}
          </CircleProgress>
        </View>
      </View>
    )
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other')
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear()
    this.props.navigation.navigate('Auth')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 4,
    // borderWidth: 2,
    // borderColor: 'red'
  },
  toolBtns: {
    width: '100%',
    flex: 1,
    borderRadius: 4,
    // borderWidth: 2,
    // borderColor: 'blue'
  },
  coins: {
    width: '100%',
    flex: 3,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'blue'
  },
  circleProgress: {
    width: '100%',
    flex: 3,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'green',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scale: {
    width: '65%',
    height: '65%',
  },
})
