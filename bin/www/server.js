/**
 * Objetivo: Arquivo responsavel pela execuçao da api no localost (http://localhost:3000)
 * Autor: Pedro Vieira
 * data_criacao: 10/10/2022
 * versao: 1.0.0
 */

import app from '../../src/v1/app';

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}/`);
});
