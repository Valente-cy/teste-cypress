Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorna false para impedir que o Cypress falhe o teste
    // Pode ser usado para ignorar erros específicos
    if (err.message.includes('Unexpected token &')) {
      return false;
    }
    return true;
  }); 

  Cypress.on('uncaught:exception', (err, runnable) => {
    // Registra o erro para diagnóstico
    console.error('Uncaught exception:', err);
    
    // Impede que o Cypress falhe o teste
    return false;
  });
  // cypress/support/index.js

function generateCPF() {
  const randDigit = () => Math.floor(Math.random() * 10);

  const cpf = Array.from({ length: 9 }, randDigit)
    .map(String)
    .join('');

  const calcDigit = (numbers) => {
    const sum = numbers.reduce((acc, num, i) => acc + num * (10 - i), 0);
    const digit = 11 - (sum % 11);
    return digit > 9 ? 0 : digit;
  };

  const numbers = cpf.split('').map(Number);
  const digit1 = calcDigit(numbers);
  const digit2 = calcDigit([...numbers, digit1]);

  return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${digit1}${digit2}`;
}

Cypress.Commands.add('generateCPF', () => generateCPF());
