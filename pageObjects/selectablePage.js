import { BasePage } from './basePage';

export class SelectablePage extends BasePage {
  static get url() {
    return '/selectable';
  }

  static get gridButton() {
    return cy.get('#demo-tab-grid');
  }

  static get firstRow() {
    return cy.get('#row1');
  }

  static get secondRow() {
    return cy.get('#row2');
  }

  static get thirdRow() {
    return cy.get('#row3');
  }
}
