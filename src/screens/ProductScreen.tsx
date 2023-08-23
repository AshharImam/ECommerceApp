import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ProductItem from '../components/ProductItem';
import useProductListController from '../view-controllers/useProductListController';

interface ProductScreenProps {}

const ProductScreen = ({}: ProductScreenProps): JSX.Element => {
  const {products, handleAddToCart, isItemInBasket} =
    useProductListController();
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <ProductItem
            product={item}
            isItemInBasket={isItemInBasket(item.id)}
            onPress={() =>
              handleAddToCart({
                productId: item.id,
                quantity: 1,
                product: item,
              })
            }
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
