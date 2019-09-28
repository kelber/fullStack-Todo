import { getGreeting } from '../support/app.po';

describe('full-stack-todos', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to full-stack-todos!');
  });
});
