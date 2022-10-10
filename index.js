/**
 * Objetivo: Arquivo responsavel pela execuçao da api no localost (http://localhost:3000)
 * Autor: Pedro Vieira
 * data_criacao: 10/10/2022
 * versao: 1.0.0
 */

import app from './app';

app.listen(3000, () => {
  console.log('http://localhost:3000/');
});
