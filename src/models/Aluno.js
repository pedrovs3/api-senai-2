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
  async insertAluno({
    nome, foto, sexo, rg, cpf, email, telefone, celular, data_nascimento,
  }) {
    const addAluno = await prisma.$queryRaw `insert into tbl_aluno (nome, foto, sexo, rg, cpf, email, telefone, celular, data_nascimento)
    values (${nome}, ${foto}, ${sexo}, ${rg}, ${cpf}, ${email}, ${telefone}, ${celular}, ${data_nascimento});
  `;

    return addAluno;
  }

  async selectAllAlunos() {
    // eslint-disable-next-line max-len
    // Foi criado um objeto do tipo RecordSet (rsAlunos) para receber os dados do banco, atraves do script sql (SELECT)
    const rsAlunos = await prisma.$queryRaw `select * from tbl_aluno;`;

    // return (rsAlunos.length > 0 ? rsAlunos : false);

    if (rsAlunos.length > 0) return rsAlunos;
    return false;
  }

  async selectAluno(id) {
    const rsAluno = await prisma.$queryRaw `select * from tbl_aluno where id = ${id};`;

    return (rsAluno.length > 0 ? rsAluno[0] : false);
  }

  async updateAluno(updateData, id) {
    console.log(`update tbl_aluno set ${updateData} where id = ${id}`);
    const updatedAluno = await prisma.$queryRaw `UPDATE tbl_aluno SET ${updateData} where id = ${id};`;

    console.log(updatedAluno);
  }

  async deleteAluno(id) {
    const deletedAluno = await prisma.$queryRaw `DELETE from tbl_aluno WHERE id = ${id};`;

    return deletedAluno;
  }
}

export default new Aluno();
