import { View, Text, TextInput, Button } from 'react-native';

export function Profile() {
  return (
    <View>
      <Text testID='text-title'>
        Perfil
      </Text>

      <TextInput
        testID='input-name'
        placeholder='Nome'
        autoCorrect={false}
        value='Leandro'
      />

      <TextInput
        testID='input-surname'
        placeholder='Sobrenome'
        value='Azanniel'
      />

      <Button
        title='Salvar'
        onPress={() => {}}
      />
    </View>
  );
}