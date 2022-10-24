/**
 * Objetivo: Mensagens de erro
 * Autor: Pedro Vieira
 * Versao: 1.0.0
 */

const ERRORS_MESSAGE = {
  REQUIRED_FIELDS: 'Empty required fields',
  EMPTY_BODY: 'Nenhum dado foi enviado',
  INVALID_EMAIL: 'O email fornecido é invalido.',
  CONTENT_TYPE: 'O cabecalho da requisicao nao contem um content-type Correto.',
  INTERNAL_ERROR_DB: 'Não foi possivel realizar a operação com o banco de dados.',
  REQUIRED_ID: 'ID is required in this route.',
};

const SUCCESSFUL_MESSAGE = {
  INSERT_ITEM: 'Inserido com sucesso no banco de dados.',
  UPDATE_ITEM: 'Atualizado com sucesso no banco de dados.',
  DELETE_ITEM: 'Deletado com sucesso no banco de dados.',
  STUDENT_CREATED: 'Successful created student',
};

export {
  ERRORS_MESSAGE,
  SUCCESSFUL_MESSAGE,
};
