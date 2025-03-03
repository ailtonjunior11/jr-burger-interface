/* eslint-disable react/button-has-type */
/* eslint-disable import/prefer-default-export */
import React from 'react';

import { useCart } from '../../hooks/CartContext';
import formatCurrency from '../../Utils/formatCurrency';
import { Container, Header, Body, EmptyCart } from './styles';

export function CartItems() {
  const { cartProducts, increaseProducts, decreaseProducts } = useCart();

  return (
    <Container>
      <Header>
        <p />
        <p>Itens</p>
        <p>Preço</p>
        <p style={{ paddingRight: 30 }}>Quantidade</p>
        <p style={{ paddingLeft: 20 }}>Total</p>
      </Header>

      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} alt="imagens dos produtos" />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <button onClick={() => decreaseProducts(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseProducts(product.id)}>+</button>
            </div>
            <p>{formatCurrency(product.quantity * product.price)}</p>
          </Body>
        ))
      ) : (
        <EmptyCart>Carrinho vazio</EmptyCart>
      )}
    </Container>
  );
}
