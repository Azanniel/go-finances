import React from "react";
import { ThemeProvider } from "styled-components/native";
import { render } from "@testing-library/react-native";

import { Input } from ".";
import theme from "../../../global/styles/theme";

function Provider({ children }: {children: React.ReactNode}) {
  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  )
}

describe('Input componet', () => {
  it('must have specific border color when active', () => {
    const { getByTestId } = render(
      <Input
        testID="input-email"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCorrect={false}
        active={true}
      />,
      {
        wrapper: Provider
      }
    );

    const inputEmailComponent = getByTestId('input-email');

    expect(inputEmailComponent.props.style[0].borderColor)
    .toEqual(theme.colors.attention);

    expect(inputEmailComponent.props.style[0].borderWidth)
    .toEqual(3);
  })
});