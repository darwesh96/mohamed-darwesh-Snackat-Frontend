import * as React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux'
import { HomeProductCard } from '../../components/homeComponent';

interface Props {

}

const CartScreen = ({ }: Props) => {
  const cart = useSelector((state: any) => state.cart)

  return (
    <View style={styles.container}>
      <FlatList style={styles.flatlist}
        numColumns={2}
        contentContainerStyle={styles.flatlistContentContainer} data={cart}
        renderItem={({ item, index }) => <HomeProductCard item={item} index={index} cart={true} />} />
    </View>
  );
};

export { CartScreen };

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  flatlist: { width: "100%", flex: 1 },
  flatlistContentContainer: {
    alignItems: "center",
    justifyContent: "space-around",
  },
});
