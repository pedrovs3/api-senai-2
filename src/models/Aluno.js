// Import da classe PrismaClient, que é responsavel pelas interações com o BD
import { PrismaClient } from '@prisma/client';

// Instancia da classe PrismaClient
const prisma = new PrismaClient();

class Aluno {
  async insertAluno(aluno) {

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

  async updateAluno(aluno) {

  }

  async deleteAluno(id) {

  }
}

export default new Aluno();
