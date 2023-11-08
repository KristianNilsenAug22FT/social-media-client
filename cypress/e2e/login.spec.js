describe('User Login and Profile Access', () => {
    it('should log in and access the user profile', () => {
      // Visit the login page or your application's login page
      cy.visit('/login');
  
      // Type in the email and password and submit the login form
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('input[name="password"]').type('password');
      cy.get('form').submit();
  
      // Wait for the user to be authenticated or redirected to their profile page
      cy.url().should('include', '/profile');
  
      // Verify that the user is on their profile page
      cy.get('h1').should('contain', 'User Profile'); // Replace with your profile page's content
    });
  });
  