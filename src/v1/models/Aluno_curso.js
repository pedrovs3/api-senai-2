import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class AlunoCurso {
  async insertAluno_Course(aluno_course) {
    try {
      const sql = `INSERT INTO tbl_aluno_curso(id_aluno, id_curso, matricula, status_aluno)
      VALUES(${aluno_course.id_aluno}, ${aluno_course.id_course}, ${aluno_course.matricula}, '${aluno_course.status_aluno}');`;

      const result = await prisma.$executeRawUnsafe(sql);

      return (!!result);
    } catch (e) {
      await this.deleteAluno(aluno_course.id_aluno);
      return false;
    }
  }

  async selectAluno_Curso(idAluno) {
    const sql = `select CAST(tbl_course.id as float) as id_curso, tbl_course.nome as nome_curso, tbl_course.carga_horaria, tbl_course.sigla as sigla_curso,
          tbl_aluno_curso.matricula, tbl_aluno_curso.status_aluno
          from tbl_aluno
          INNER JOIN tbl_aluno_curso
          ON tbl_aluno.id = tbl_aluno_curso.id_aluno
          INNER JOIN tbl_course
          ON tbl_course.id = tbl_aluno_curso.id_curso WHERE tbl_aluno.id =${idAluno};`;

    const response = await prisma.$queryRawUnsafe(sql);

    return response;
  }
}

export default new AlunoCurso();
