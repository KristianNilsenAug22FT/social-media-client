import { login } from './login';

import 'jest-localstorage-mock';

beforeEach(() => {
  localStorage.clear();
});

describe('login function', () => {
  it('should store a token in browser storage', async () => {
    // Mock the fetch function to return a successful response
    jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ accessToken: 'mockToken' }),
    });

    // Call the login function
    await login('test@example.com', 'password');

    // Ensure that the token is stored in localStorage
    expect(localStorage.getItem('token')).toBe(JSON.stringify('mockToken'));

    // Restore the original fetch function
    global.fetch.mockRestore();
  });
});
