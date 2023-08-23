import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BasketScreen from '../screens/BasketScreen';
import ProductScreen from '../screens/ProductScreen';
import {Text} from 'react-native';
import useBasketViewModel from '../view-models/useBasketViewModel';
const Stack = createStackNavigator();
const MainNavigation = (): JSX.Element => {
  const {basketItems} = useBasketViewModel();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={props => ({
            headerRight: () => (
              <Text onPress={() => props.navigation.navigate('Basket')}>
                Basket({basketItems.length})
              </Text>
            ),
          })}
        />
        <Stack.Screen
          name="Basket"
          component={BasketScreen}
          options={{
            title: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
