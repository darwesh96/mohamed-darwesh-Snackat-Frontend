import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import {
  addToCart,
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/cartSlice";
import { store } from "../../redux/store";
import { showMessage } from "react-native-flash-message";

interface Props {
  item: {
    category: string;
    description: string;
    id: Number;
    quantity: Number;
    image: string;
    price: Float;
    rating: {
      count: Number;
      rate: Float;
    };
    title: string;
  };
  index: Number;
  cart?: boolean;
}

const HomeProductCard = ({ item, index, cart }: Props) => {
  return (
    <View style={styles.container}>
      {cart && (
        <Pressable
          onPress={() => {
            showMessage({
              message: `${item.title} has been removed from cart !`,
              type: "success",
            });
            store.dispatch(removeItem(item.id));
          }}
          style={styles.removeFromCartButton}
        >
          <Text style={styles.addToCartText}>Remove from Cart</Text>
        </Pressable>
      )}
      <Text style={styles.category}>{item.category}</Text>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: item.image }}
      />
      <Text numberOfLines={2} style={styles.title}>
        {item.title}
      </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>USD {item.price}</Text>
        <Text style={styles.priceText}>{item.rating?.rate}/5</Text>
      </View>
      {!cart && (
        <Pressable
          onPress={() => {
            showMessage({
              message: `${item.title} has been added to cart !`,
              type: "success",
            });
            store.dispatch(addToCart(item));
          }}
          style={styles.addToCartButton}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </Pressable>
      )}

      {cart && (
        <View style={styles.quantityContainer}>
          <Pressable
            onPress={() => store.dispatch(decrementQuantity(item.id))}
            style={styles.quantityItem}
          >
            <Text style={styles.addToCartText}>-</Text>
          </Pressable>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <Pressable
            onPress={() => store.dispatch(incrementQuantity(item.id))}
            style={styles.quantityItem}
          >
            <Text style={styles.addToCartText}>+</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export { HomeProductCard };

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width / 2 - 10,
    maxHeight: 400,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
    justifyContent: "space-between",
    margin: 5,
  },
  category: {
    backgroundColor: "grey",
    fontSize: 9,
    color: "white",
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 5,
    textAlign: "center",
    alignSelf: "flex-end",
  },
  image: {
    width: "100%",
    height: "50%",
    alignSelf: "center",
  },
  title: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
    marginVertical: 8,
    textAlign: "left",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceText: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
  addToCartButton: {
    backgroundColor: "black",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  removeFromCartButton: {
    backgroundColor: "black",
    justifyContent: "center",
    alignSelf: "flex-end",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginBottom: 5,
  },
  addToCartText: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 5,
    alignItems: "center",
  },
  quantityItem: {
    backgroundColor: "black",
    justifyContent: "center",
    alignSelf: "center",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  quantityText: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
});
