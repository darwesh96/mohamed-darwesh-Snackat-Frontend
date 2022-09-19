import * as React from 'react';
import { StyleSheet,View,Text } from 'react-native';

interface Props {
 
}

const CartScreen = ({}: Props) => {
 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Cart!</Text>
  </View>
);
};

export {CartScreen};

const styles = StyleSheet.create({
 
});
