import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import useBasketController from '../view-controllers/useBasketController';
import BasketItem from '../components/BasketItem';
interface BasketScreen {}
const BasketScreen = (): JSX.Element => {
  const {
    basketItems,
    totalPrice,
    handleDeleteItemPress,
    handleUpdateQuantityPress,
  } = useBasketController();

  const renderItem = ({item}: any): JSX.Element => {
    return (
      <BasketItem
        item={item}
        handleDeletePress={() => handleDeleteItemPress(item.productId)}
        handleOnIncrement={() =>
          handleUpdateQuantityPress(item.productId, item.quantity + 1)
        }
        handleOnDecrement={() =>
          handleUpdateQuantityPress(item.productId, item.quantity - 1)
        }
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Basket ({basketItems.length})</Text>
      <FlatList data={basketItems} renderItem={renderItem} />
      <View style={styles.textContainer}>
        <Text>Total Price</Text>
        <Text>{totalPrice.toFixed(2)}$</Text>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '10%',
    paddingHorizontal: 10
  },
});
