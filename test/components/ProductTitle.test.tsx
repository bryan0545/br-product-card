import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductTitle } from '../../src/components';
import { product } from '../data/products';

describe('ProductTitle', () => {
  test('Should display the component correctly with personalized title', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom Product" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Should display the component with product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
