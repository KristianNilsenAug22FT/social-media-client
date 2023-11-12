describe('Logout', () => {
    it('should log out the user', () => {
      // Visit the website
      cy.visit('https://kristiannilsenaug22ft.github.io/social-media-client/'); // Change the URL before PR
  
      cy.get('.modal.fade.show').invoke('css', 'display', 'none');

      // Click the login button directly
      cy.get('button[data-auth="login"]').click({ multiple: true, force: true });
  
  
    // Type the username character by character because it was failing to write the username as a whole
    const username = 'kristian.nilsen@stud.noroff.no';
    for (let i = 0; i < username.length; i++) {
    cy.get('#loginEmail').type(username.charAt(i), { delay: 10 });
    }

    // Type the password
    cy.get('#loginPassword').type('12345678');

    // Submit the form
    cy.get('#loginForm').submit();

    cy.get('body.logged-in', { timeout: 1000 }).should('exist');

  
      // Click the logout button
      cy.get('button[data-auth="logout"]').click();
  
      // Check if the user is logged out
      cy.get('body.logged-in').should('not.exist');
  
      // Check if the login button is visible
      cy.get('button[data-auth="login"]').should('be.visible');
    });
  });
  