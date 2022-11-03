/**
 * Objetivo: Arquivo responsavel pela manipulaçao do banco (tbl_aluno)
 * Autor: Pedro Vieira
 * data_criacao: 10/10/2022
 * versao: 1.0.0
 */

// Import da classe PrismaClient, que é responsavel pelas interações com o BD
import { PrismaClient } from '@prisma/client';
import AlunoCurso from './Aluno_curso';

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

    await Promise.all(rsAlunos.map(async (aluno) => {
      aluno.urlFoto = `http://localhost:3000/uploads/images/${aluno.foto}`;
      aluno.cursos = await AlunoCurso.selectAluno_Curso(aluno.id);
    }));

    return (rsAlunos.length > 0 ? rsAlunos : false);
  }

  async selectAluno(id) {
    const rsAluno = await prisma.$queryRawUnsafe `SELECT CAST(id AS float) AS id, nome, foto, sexo, rg, cpf, email, telefone, celular, DATE_FORMAT(data_nascimento, '%d-%m-%Y') as data_nascimento FROM tbl_aluno WHERE id = ${id};`;

    rsAluno[0].urlFoto = `http://localhost:3000/uploads/images/${rsAluno[0].foto}`;
    await Promise.all(rsAluno[0].cursos = await AlunoCurso.selectAluno_Curso(rsAluno[0].id));

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

  async selectLastId() {
    const sql = 'SELECT CAST(id as FLOAT) as id FROM tbl_aluno ORDER BY id DESC LIMIT 1';

    const response = await prisma.$queryRawUnsafe(sql);

    if (response) return response[0];
    return false;
  }
}

export default new Aluno();
