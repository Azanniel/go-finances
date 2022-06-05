import React, { useState } from 'react';

import { Input } from '../../components/Form/Input';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../../components/Form/CategorySelect';
import { Button } from '../../components/Form/Button';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes
} from './styles';

export function Register() {
  const [transactionType, setTransactionType] = useState('');

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input
            placeholder='Nome'
          />

          <Input
            placeholder='Preço'
          />

          <TransactionTypes>
            <TransactionTypeButton
              type='up'
              title='Entrada'
              isActive={transactionType === 'up'}
              onPress={() => handleTransactionTypeSelect('up')}
            />

            <TransactionTypeButton
              type='down'
              title='Saída'
              isActive={transactionType === 'down'}
              onPress={() => handleTransactionTypeSelect('down')}
            />
          </TransactionTypes>

          <CategorySelect title='Categoria' />
        </Fields>

        <Button activeOpacity={0.7} title='Enviar' />
      </Form>
    </Container>
  );
}