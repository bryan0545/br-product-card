import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import React, { createContext, CSSProperties } from 'react';
import {
  Product,
  ProductContextProps,
  onChangeArgs,
  InitialValues,
  ProductCartHandlers,
} from '../interfaces/interfaces';
import { ReactElement } from 'react';

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCartHandlers) => ReactElement;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const {
    counter,
    increseCounter,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider value={{ counter, increseCounter, product, maxCount }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increseCounter,
          reset,
        })}
      </div>
    </Provider>
  );
};
