import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PriceTrend from './PriceTrend/PriceTrend';
import MarketTab from './TradeControl/MarketTab';
import MarketSale from './TradeControl/MarketSale';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <PriceTrend />
      <MarketTab />
      <MarketSale />
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Market',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
