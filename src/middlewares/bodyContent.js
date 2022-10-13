/**
 * Objetivo: Middleware que controla o body da requisição e verifica se ele nao esta vazio.
 * Autor: Pedro Vieira
 * Versao: 1.0.0
*/

import validateEmpty from '../utils/validateEmpty';

const bodyContent = (req, res, next) => {
  const { body } = req;

  if (!req.body || Object.keys(body).length === 0) {
    return res.status(400).json({ message: 'Nenhum dado enviado.' });
  }

  if (!validateEmpty(body)) return res.status(400).json({ message: 'Algum atributo obrigatorio esta vazio.' });

  return next();
};

export default bodyContent;
