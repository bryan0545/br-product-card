import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('Should display the component correctly without image', () => {
    const wrapper = renderer.create(<ProductImage img="http://hola.jpgs" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Should display the component custom image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
