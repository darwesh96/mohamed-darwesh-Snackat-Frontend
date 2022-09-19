import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {getProducts} from '../../api/productsApi';

interface Props {}

const HomeScreen = ({}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    getProducts().then(res => {
      setIsLoading(false);
      console.log(res, 'res');
    });
  }, []);
  return isLoading ? (
    <ActivityIndicator size="large" style={{alignSelf: 'center', flex: 1}} />
  ) : (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
};

export {HomeScreen};

const styles = StyleSheet.create({});
