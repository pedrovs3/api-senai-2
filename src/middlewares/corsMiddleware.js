/**
 * Objetivo: Arquivo responsavel pela atribuiçao do header ao cors.
 * Autor: Pedro Vieira
 * data_criacao: 10/10/2022
 * versao: 1.0.0
 */

const corsMiddleware = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
};

export default corsMiddleware;
