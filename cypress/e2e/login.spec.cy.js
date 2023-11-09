describe('Login and Profile Access', () => {
  it('should log in and access profile', () => {
    // Visit the website
    cy.visit('http://localhost:5500'); // Change the URL before PR

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

      // Ensure the login is successful and the profile page is visible
      cy.get('.profile.page', { timeout: 5000 }).should('be.visible');
   
  });
});
