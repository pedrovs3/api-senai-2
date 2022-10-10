/**
 * Objetivo: Arquivo responsavel pela manipulaçao do banco (tbl_aluno)
 * Autor: Pedro Vieira
 * data_criacao: 10/10/2022
 * versao: 1.0.0
 */

// Import da classe PrismaClient, que é responsavel pelas interações com o BD
import { PrismaClient } from '@prisma/client';

// Instancia da classe PrismaClient
const prisma = new PrismaClient();

class Aluno {
  async insertAluno(aluno) {
    const addAluno = await prisma.$queryRaw `insert into tbl_aluno (${aluno.nome},
      ${aluno.foto}, 
      ${aluno.sexo}, 
      ${aluno.rg}, 
      ${aluno.cpf}, 
      ${aluno.email}, 
      ${aluno.telefone}, 
      ${aluno.celular}, 
      ${aluno.data_nascimento})`;

    return (addAluno.length > 0 ? addAluno : false);
  }

  async selectAllAlunos() {
    // eslint-disable-next-line max-len
    // Foi criado um objeto do tipo RecordSet (rsAlunos) para receber os dados do banco, atraves do script sql (SELECT)
    const rsAlunos = await prisma.$queryRaw `select * from tbl_aluno`;

    // return (rsAlunos.length > 0 ? rsAlunos : false);

    if (rsAlunos.length > 0) return rsAlunos;
    return false;
  }

  async selectAluno(id) {
    const rsAluno = await prisma.$queryRaw `select * from tbl_aluno where id=${id}`;

    return (rsAluno.length > 0 ? rsAluno : false);
  }

  // async updateAluno(aluno) {

  // }

  // async deleteAluno(id) {

  // }
}

export default new Aluno();
