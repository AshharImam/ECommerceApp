import {View, Text, Image, StyleSheet, Button} from 'react-native';
import React from 'react';
import ProductItemModel from '../models/ProductItemModel';
type ProductItemProps = {
  product: ProductItemModel;
  onPress: () => void;
  isItemInBasket: boolean;
};
const ProductItem = ({
  product,
  onPress,
  isItemInBasket,
}: ProductItemProps): JSX.Element => {
  return (
    <View style={styles.productContainer} testID={`product-item-${product.id}`}>
      <Image source={{uri: product.img}} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text>{product.name}</Text>
        <Text>Price: {product.price}</Text>
        <Text>Colour: {product.colour}</Text>
        <Button
          title={isItemInBasket ? 'Remove From Cart' : 'Add To Cart'}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default ProductItem;

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
  },
});
