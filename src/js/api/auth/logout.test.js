import { logout } from './logout'; // Import your logout function

// Import your custom remove function
import { remove } from "../../storage/index.js";

// Mock the remove function
jest.mock("../../storage/index.js", () => ({
  remove: jest.fn(),
}));

describe('logout function', () => {
  it('should clear the token from browser storage', () => {
    // Call the logout function
    logout();

    // Assertions
    expect(remove).toHaveBeenCalledWith('token');
    expect(remove).toHaveBeenCalledWith('profile');
  });
});
