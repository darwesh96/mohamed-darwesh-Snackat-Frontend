import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ActivityIndicator, Image, Pressable, Dimensions} from 'react-native';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import {getProducts} from '../../api/productsApi';

interface Props {
    item:{
        category:string,
        description:string,
        id:Number,
        image:string,
        price:Float,
        rating:{
           count:Number,
           rate:Float
        },
        title:string
    },
    index:Number,
}

const HomeProductCard = ({item,index}: Props) => {

  return  (
    <View style={styles.container}>
      <Text style={styles.category}>{item.category}</Text>
      <Image resizeMode='contain' style={styles.image} source={{uri:item.image}} />
      <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
      <View style={styles.priceContainer}>
      <Text style={styles.priceText}>USD {item.price}</Text>
      <Text style={styles.priceText}>{item.rating?.rate}/5</Text>
      </View>
      <Pressable style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </Pressable>
    </View>
  );
};

export {HomeProductCard};

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width /2 - 10,
        maxHeight:400,
        backgroundColor:"white",
        borderRadius:10,
        borderWidth:1,
        borderColor:"grey",
        padding:10,
        justifyContent:"space-between",
        margin:5
    },
    category:{
        backgroundColor:"grey",
        fontSize:9,
        color:"white",
        borderRadius:20,
        paddingVertical:3,
        paddingHorizontal:5,
        textAlign:"center",
        alignSelf:"flex-end",
        // position:"absolute",
        // right:5,
        // top:5,
        // zIndex:9
    },
    image:{
        width:"100%",
        height:"50%",
        alignSelf:"center"

    },
    title:{
        fontSize:14,
        color:"black",
        fontWeight:"bold",
        marginVertical:8,
        textAlign:"left"
    },
    priceContainer:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    priceText:{
        fontSize:15,
        color:"black",
        fontWeight:"bold",
    },
    addToCartButton:{
        backgroundColor:"black",
        justifyContent:"center",
        alignSelf:"flex-end",
        marginTop:10,
        paddingVertical:5,
        paddingHorizontal:15,
        borderRadius:5
    },
    addToCartText:{
        fontSize:15,
        color:"white",
        fontWeight:"bold",
        textAlign:"center"
    }
});
