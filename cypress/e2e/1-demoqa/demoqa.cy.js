import { SelectablePage } from '../../../pageObjects/selectablePage';

context('Selectable Grid', () => {
  beforeEach(() => {
    SelectablePage.visit();
  });

  it('Selectable Grid - Even Numbers', () => {
    // CLick button "Ģrid"
    SelectablePage.gridButton.click();
    // Click - “Two”, “Four”, “Six”, “Eight”
    SelectablePage.firstRow.contains('Two').click();
    SelectablePage.secondRow.contains('Four').click();
    SelectablePage.secondRow.contains('Six').click();
    SelectablePage.thirdRow.contains('Eight').click();

    //Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
    SelectablePage.firstRow.contains('Two').should('have.class', 'active');
    SelectablePage.secondRow.contains('Four').should('have.class', 'active');
    SelectablePage.secondRow.contains('Six').should('have.class', 'active');
    SelectablePage.thirdRow.contains('Eight').should('have.class', 'active');

    // Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
    SelectablePage.firstRow.contains('One').should('not.have.class', 'active');
    SelectablePage.firstRow.contains('Three').should('not.have.class', 'active');
    SelectablePage.secondRow.contains('Five').should('not.have.class', 'active');
    SelectablePage.thirdRow.contains('Seven').should('not.have.class', 'active');
    SelectablePage.thirdRow.contains('Nine').should('not.have.class', 'active');
  });
});
