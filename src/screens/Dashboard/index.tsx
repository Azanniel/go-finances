import React from 'react';
import { HighLightCard } from '../../components/HighLightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreetings,
  UserName,
  Icon,
  HighLightCards,
  Transactions,
  Title,
  TransactionList
} from './styles'

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      date: '13/04/2022',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      }
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hamburgueria Pizzy',
      amount: 'R$ 59,00',
      date: '13/04/2022',
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      }
    },
    {
      id: '3',
      type: 'negative',
      title: 'Aluguel do apartamento',
      amount: 'R$ 1.200,00',
      date: '13/04/2022',
      category: {
        name: 'Casa',
        icon: 'shopping-bag'
      }
    }
  ];

  return (
    <Container>
      <Header>

        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://github.com/azanniel.png' }} />

            <User>
              <UserGreetings>Olá,</UserGreetings>
              <UserName>Leandro</UserName>
            </User>
          </UserInfo>

          <Icon name='power' />
          
        </UserWrapper>

      </Header>

      <HighLightCards>
        <HighLightCard 
          type='up'
          title='Entradas'
          amount='R$ 17.400,00'
          lastTransaction='Último entrada dia 13 de abril'
        />

        <HighLightCard 
          type='down'
          title='Saídas'
          amount='R$ 1.259,00'
          lastTransaction='Último saída dia 03 de abril'
        />

        <HighLightCard 
          type='total'
          title='Total'
          amount='R$ 16.141,00'
          lastTransaction='01 à 16 de abril'
        />
      </HighLightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}