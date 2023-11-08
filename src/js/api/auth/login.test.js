const auth = require('./login'); // Replace with your actual module path

describe('login function', () => {
  it('should store a token in browser storage', () => {
    // Mock the localStorage
    const setItemMock = jest.fn();
    global.localStorage.setItem = setItemMock;

    // Call the login function
    const token = auth.login('testUser', 'testPassword');

    // Assertions
    expect(token).toEqual('your_token_here'); // Adjust to your expected token
    expect(setItemMock).toHaveBeenCalledWith('token', 'your_token_here');
  });
});
