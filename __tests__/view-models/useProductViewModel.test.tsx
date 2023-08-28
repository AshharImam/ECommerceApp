import {describe, expect, it} from '@jest/globals';
import {renderHook} from '@testing-library/react-native';
import useProductViewModel from '../../src/view-models/useProductViewModel';
import {products} from '../../__mocks__/constants';
describe('useProductViewModel', () => {
  it('should fetch products successfully', async () => {
    const expectedProducts = products;

    const {result} = renderHook(useProductViewModel);

    const fetchedProducts = await result.current.fetchProducts();

    expect(fetchedProducts).toEqual(expectedProducts);
  });
});
