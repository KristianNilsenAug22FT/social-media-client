describe('Invalid Login Attempt', () => {
    it('should show error message for invalid credentials', () => {
      // Visit the website
      cy.visit('http://localhost:5500'); // Change the URL before PR
  
      cy.get('.modal.fade.show').invoke('css', 'display', 'none');
  
      // Click the login button directly
      cy.get('button[data-auth="login"]').click({ multiple: true, force: true });
  
      // Fill in the login form with invalid credentials
      cy.get('#loginEmail').type('invalid@example.com');
      cy.get('#loginPassword').type('wrongpassword');
  
      // Stub the window.alert method to capture the alert
      cy.window().then((win) => {
        cy.stub(win, 'alert').as('alertStub');
      });
  
      // Submit the form
      cy.get('#loginForm').submit();
  
      // Check if the alert was called
      cy.get('@alertStub').should('have.been.calledWith', 'Either your username was not found or your password is incorrect');
    });
  });
  