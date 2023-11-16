it('Should pass the happy path of the client', () => {
  cy.visit('http://localhost:19006/');
  cy.get("input[id='name-input']").type('Maya');
  cy.get("input[id='age-input']").type('8');
  cy.get("#info-btn").click();
  cy.get("#blue-select-btn").click();

  const currentDate = new Date();

  const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const monthsOfYear = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = monthsOfYear[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  const calendar = cy.get("#calendar-container");
  calendar.should('contain.text', dayOfWeek);
  calendar.should('contain.text', month);
  calendar.should('contain.text', day);
  calendar.should('contain.text', year);
});