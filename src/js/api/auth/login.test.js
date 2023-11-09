import { login } from './login';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

beforeEach(() => {
  // Clear the mocks before each test
  jest.clearAllMocks();

  // Mock the global localStorage
  Object.defineProperty(global, 'localStorage', { value: localStorageMock });

  // Mock the fetch function
global.fetch = jest.fn().mockResolvedValueOnce({
  ok: true,
  json: () => Promise.resolve({ accessToken: 'mockToken' }),
});
});

afterEach(() => {
  // Restore the original fetch function
  jest.restoreAllMocks();
});

describe('login function', () => {
  it('should store a token in browser storage', async () => {
    // Call the login function
    await login('test@example.com', 'password');

    // Ensure that the token is stored in localStorage
    expect(localStorageMock.setItem).toHaveBeenCalledWith('token', JSON.stringify('mockToken'));
  });
});
