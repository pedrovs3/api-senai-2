/**
 * Objetivo: Mensagens de erro
 * Autor: Pedro Vieira
 * Versao: 1.0.0
 */
const invalidEmailError = 'Invalid email.';

const errorsMessage = {
  REQUIRED_FIELDS: 'Empty required fields',
  EMPTY_BODY: 'Nenhum dado foi enviado',
  INVALID_EMAIL: 'O email fornecido é invalido.',
  CONTENT_TYPE: 'O cabecalho da requisicao nao contem um content-type Correto.',
};

const successfulMessage = {
  STUDENT_CREATED: 'Successful created student',
};

export {
  errorsMessage,
  successfulMessage,
};
