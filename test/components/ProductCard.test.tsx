import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductCard', () => {
  const { act } = renderer;
  test('Should display the component correctly', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <h1>Hola</h1>}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Should increase the counter', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {({ count, increseCounter }) => (
          <>
            <h1>Hola</h1>
            <span>{count}</span>
            <button onClick={() => increseCounter(1)}>+1</button>
          </>
        )}
      </ProductCard>
    );
    let tree = wrapper.toJSON();

    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
