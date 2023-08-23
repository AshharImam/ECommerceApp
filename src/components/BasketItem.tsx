import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import BasketItemModel from '../models/BasketItemModel';
type BasketItemProps = {
  item: BasketItemModel;
  handleDeletePress: () => void;
  handleOnIncrement: () => void;
  handleOnDecrement: () => void;
};
const BasketItem = ({
  item,
  handleDeletePress,
  handleOnIncrement,
  handleOnDecrement,
}: BasketItemProps): JSX.Element => {
  return (
    <View style={styles.productContainer}>
      <Image source={{uri: item.product.img}} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text>{item.product.name}</Text>
        <Text>Price: {item.product.price}</Text>
        <Text>Colour: {item.product.colour}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            testID="decrement-button"
            onPress={handleOnDecrement}
            style={[styles.iconContainer, styles.minusContainer]}
            disabled={item.quantity === 1}>
            <Text style={[styles.sign, styles.minus]}>-</Text>
          </TouchableOpacity>
          <Text>{item.quantity}</Text>
          <TouchableOpacity
            testID="increment-button"
            onPress={handleOnIncrement}
            style={styles.iconContainer}>
            <Text style={styles.sign}>+</Text>
          </TouchableOpacity>
        </View>
        <Button title={'Remove From Cart'} onPress={handleDeletePress} />
      </View>
    </View>
  );
};

export default BasketItem;

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
  },
  image: {
    height: 100,
    width: 60,
    resizeMode: 'contain',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '26%',
    justifyContent: 'space-between',
  },
  sign: {
    fontSize: 20,
  },
  minus: {
    color: 'white',
  },
  iconContainer: {
    height: 25,
    width: 25,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
  },
  minusContainer: {
    backgroundColor: 'tomato',
  },
});
