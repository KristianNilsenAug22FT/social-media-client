const auth = require('./logout'); // Replace with your actual module path

describe('logout function', () => {
  it('should clear the token from browser storage', () => {
    // Mock the localStorage
    const removeItemMock = jest.fn();
    global.localStorage.removeItem = removeItemMock;

    // Call the logout function
    auth.logout();

    // Assertions
    expect(removeItemMock).toHaveBeenCalledWith('token');
  });
});
