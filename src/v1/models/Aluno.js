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
    const sql = `insert into tbl_aluno (nome, foto, sexo, rg, cpf, email, telefone, celular, data_nascimento)
    values ('${nome}', '${foto}', '${sexo}', '${rg}', '${cpf}', '${email}', '${telefone}', '${celular}', '${data_nascimento}');
  `;

    // Executa o script no banco de dados (Com variaveis).
    const response = await prisma.$executeRawUnsafe(sql);

    return (!!response);
  }

  async selectAllAlunos() {
    // Foi criado um objeto do tipo RecordSet (rsAlunos)
    // para receber os dados do banco, atraves do script sql (SELECT)
    const rsAlunos = await prisma.$queryRaw `SELECT CAST(id AS float) AS id, nome, foto, sexo, rg, cpf, email, telefone, celular, DATE_FORMAT(data_nascimento, '%d-%m-%Y') as data_nascimento FROM tbl_aluno ORDER BY id DESC;`;

    return (rsAlunos.length > 0 ? rsAlunos : false);
  }

  async selectAluno(id) {
    const rsAluno = await prisma.$queryRawUnsafe `SELECT CAST(id AS float) AS id, nome, foto, sexo, rg, cpf, email, telefone, celular, DATE_FORMAT(data_nascimento, '%d-%m-%Y') as data_nascimento FROM tbl_aluno WHERE id = ${id};`;

    return (rsAluno.length > 0 ? rsAluno[0] : false);
  }

  async updateAluno(updateData, id) {
    /* const sql = `UPDATE tbl_aluno SET nome = ${body.nome},
    foto = ${body.foto},
    sexo = ${body.sexo},
    rg = ${body.rg},
    cpf = ${body.cpf},
    email = ${body.email},
    telefone = ${body.telefone},
    celular = ${body.celular},
    data_nascimento = ${body.data_nascimento} WHERE id = ${id}` */

    const sql = `UPDATE tbl_aluno SET ${updateData} WHERE id = ${id};`;

    const updatedAluno = await prisma.$queryRawUnsafe(sql);

    return (!!updatedAluno);
  }

  async deleteAluno(id) {
    const deletedAluno = await prisma.$queryRaw `DELETE FROM tbl_aluno WHERE id = ${id};`;

    return (!!deletedAluno);
  }
}

export default new Aluno();
