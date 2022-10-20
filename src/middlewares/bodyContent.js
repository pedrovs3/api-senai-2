/**
 * Objetivo: Middleware que controla o body da requisição e verifica se ele nao esta vazio.
 * Autor: Pedro Vieira
 * Versao: 1.0.0
*/

import { ERRORS_MESSAGE } from '../config/messages';
import emailValidator from '../utils/emailValidator';
import validateEmpty from '../utils/validateEmpty';

const bodyContent = (req, res, next) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      throw new Error(ERRORS_MESSAGE.EMPTY_BODY);
    }

    const { body } = req;

    if (!validateEmpty(body)) throw new Error(ERRORS_MESSAGE.REQUIRED_FIELDS);
    if (!emailValidator(body.email)) throw new Error(ERRORS_MESSAGE.INVALID_EMAIL);

    return next();
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
};

export default bodyContent;
