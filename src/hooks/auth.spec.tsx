import { renderHook, act } from "@testing-library/react-hooks";
import fetchMock from 'jest-fetch-mock';

import { AuthProvider, useAuth } from "./auth";

jest.mock('expo-auth-session', () => {
  return {
    startAsync: () => {
      return {
        type: 'success',
        params: {
          access_token: 'google-token'
        }
      }
    }
  }
});

fetchMock.enableMocks();

describe('Auth Hook', () => {
  it('should be able to sign in with Google account existing', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({
      id: `userInfo.id`,
      name: `userInfo.name`,
      email: `userInfo.email`,
      photo: `userInfo.picture`,
      locale: `userInfo.locale`,
      verified_email: `userInfo.verified_email`,
    }));
    
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user).toBeTruthy();
  });
})