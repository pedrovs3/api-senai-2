/**
 * Objetivo: Middleware que controla o body da requisição e verifica se ele nao esta vazio.
 * Autor: Pedro Vieira
 * Versao: 1.0.0
*/

import { errorsMessage } from '../config/messages';
import validateEmpty from '../utils/validateEmpty';

const bodyContent = (req, res, next) => {
  try {
    const { body } = req;

    if (!req.body || Object.keys(body).length === 0) {
      throw new Error(errorsMessage.EMPTY_BODY);
    }

    if (!validateEmpty(body)) throw new Error(errorsMessage.EMPTY_REQUIRED_ERROR);

    return next();
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
};

export default bodyContent;
