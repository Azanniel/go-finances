import React from 'react';
import { Alert, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SignInSocialButton } from '../../components/SignInSocialButton';
import { useAuth } from '../../hooks/auth';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';

import {
  Container, Footer, FooterWrapper, Header, SignInTitle, Title, TitleWrapper
} from './styles';

export function SignIn() {
  const { signInWithGoogle, signInWithApple } = useAuth();

  async function handleSignWithGoogle() {
    try {
      await signInWithGoogle();
      
    } catch (error) {
      console.error(error);
      Alert.alert('Não foi possível conectar a conta Google');
    }
  }

  async function handleSignWithApple() {
    try {
      await signInWithApple();
      
    } catch (error) {
      console.error(error);
      Alert.alert('Não foi possível conectar a conta Apple');
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg
            width={RFValue(120)}
            height={RFValue(68)}
          />

          <Title>
            Controle suas {'\n'}
            finanças de forma {'\n'}
            muito simples {'\n'}
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça o seu login com {'\n'}
          umas das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            onPress={handleSignWithGoogle}
            title="Entrar com Google"
            svg={GoogleSvg}
          />

          { Platform.OS === 'ios' && (
            <SignInSocialButton
              onPress={handleSignWithApple}
              title="Entrar com Apple"
              svg={AppleSvg}
            />
          ) }
        </FooterWrapper>
      </Footer>
    </Container>
  )
}