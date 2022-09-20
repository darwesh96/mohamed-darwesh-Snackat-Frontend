import * as React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux'
import { HomeProductCard } from '../../components/homeComponent';

interface Props {

}

const CartScreen = ({ }: Props) => {
  const cart = useSelector((state: any) => state.cart)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList style={{
        width: "100%",
        flex: 1
      }} numColumns={2} contentContainerStyle={styles.flatlist} data={cart}
        renderItem={({ item, index }) => <HomeProductCard item={item} index={index} cart={true} />} />
    </View>
  );
};

export { CartScreen };

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
    justifyContent: 'space-around',
  }
});
