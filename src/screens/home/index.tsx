import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { getProducts } from "../../api/productsApi";
import { HomeProductCard } from "../../components/homeComponent";
interface Props { }

const HomeScreen = ({ }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<[]>([]);

  useEffect(() => {
    getProducts().then((res) => {
      setIsLoading(false);
      setProducts(res);
    });
  }, []);
  return isLoading ? (
    <ActivityIndicator size="large" style={{ alignSelf: "center", flex: 1 }} />
  ) : (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        style={{ width: "100%", flex: 1 }}
        numColumns={2}
        contentContainerStyle={styles.flatlist}
        data={products}
        renderItem={HomeProductCard}
      />
    </View>
  );
};

export { HomeScreen };

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
    justifyContent: "space-around",
  },
});
