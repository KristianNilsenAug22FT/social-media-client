import fetch from 'node-fetch';
import { login } from './login';

// ... (other imports and setup)

describe('login function', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should store a token in browser storage', async () => {
    // Mock the fetch function to return a successful response
    jest.spyOn(fetch, 'Promise').mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ accessToken: 'mockToken' }),
    });

    // Call the login function
    await login('test@example.com', 'password');

    // Ensure that the token is stored in localStorage
    expect(localStorage.getItem('token')).toBe(JSON.stringify('mockToken'));

    // Restore the original fetch function
    fetch.Promise.mockRestore();
  });
});
