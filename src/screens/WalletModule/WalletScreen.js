import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function WalletScreen() {
  return (
    <View style={styles.container}>
      <Text>My Wallet Coin</Text>
    </View>
  )
}

WalletScreen.navigationOptions = {
  title: 'Wallet'
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})