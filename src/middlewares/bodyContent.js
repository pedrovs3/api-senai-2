/**
 * Objetivo: Middleware que controla o body da requisição e verifica se ele nao esta vazio.
 * Autor: Pedro Vieira
 * Versao: 1.0.0
*/

import { errorsMessage } from '../config/messages';
import emailValidator from '../utils/emailValidator';
import validateEmpty from '../utils/validateEmpty';

const bodyContent = (req, res, next) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      throw new Error(errorsMessage.EMPTY_BODY);
    }

    const { body } = req;

    if (!validateEmpty(body)) throw new Error(errorsMessage.EMPTY_REQUIRED_ERROR.message);
    if (!emailValidator(body.email)) throw new Error(errorsMessage.INVALID_EMAIL);

    return next();
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
};

export default bodyContent;
