// /* eslint-disable max-len */
// /*
//  * Objetivo: Arquivo responsavel pela manipulação de dados com o banco de dados (insert, update, delete, select)
//  * Autor: Pedro Vieira
//  * Data Criação: 06/10/2022
//  * Versao: 1.0.0
// */

// // Import da classe PrismaClient, que é responsavel pelas interações com o BD
// const { PrismaClient } = require('@prisma/client');

// // Instancia da classe PrismaClient
// const prisma = new PrismaClient();

// // Função para encontrar todos os registros no banco
// const selectAllAlunos = async () => {
//   // Foi criado um objeto do tipo RecordSet (rsAlunos) para receber os dados do banco, atraves do script sql (SELECT)
//   const rsAlunos = await prisma.$queryRaw `select * from tbl_aluno`;
//   if (rsAlunos.length > 0) return rsAlunos;
//   return false;
// };

// // Função para encontrar todos os registros no banco
// const selectAluno = async (id) => {};

// // Função para inserir novo aluno no banco
// const insertAluno = async (aluno) => {};

// // Função para atualizar o aluno no banco
// const updateAluno = async (aluno) => {};

// // Função para inserir novo aluno no banco
// const deleteAluno = async (id) => {};

// exports = {
//   selectAllAlunos,
//   selectAluno,
//   insertAluno,
//   updateAluno,
//   deleteAluno,
// };
