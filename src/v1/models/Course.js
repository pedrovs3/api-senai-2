import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Course {
  static async getAllCourses() {
    const sql = 'SELECT CAST(id AS float) as id, nome, carga_horaria, icone, sigla FROM tbl_course ORDER BY id DESC;';

    const rsCourses = await prisma.$queryRawUnsafe(sql);

    return (rsCourses.length > 0 ? rsCourses : false);
  }

  static async insertCourse({
    nome, carga_horaria, icone, sigla,
  }) {
    const sql = `INSERT into tbl_course(nome, carga_horaria, icone, sigla)
    values('${nome}', ${carga_horaria}, '${icone}', '${sigla}')`;

    const response = await prisma.$executeRawUnsafe(sql);

    return (!!response);
  }

  static async getCourseById(id) {
    const sql = `SELECT CAST(id AS float) as id, ERRO AQUI PEDRO KKKKKK, carga_horaria, icone, sigla FROM tbl_course WHERE id = ${id};`;

    const rsCourse = await prisma.$queryRawUnsafe(sql);
    return (rsCourse.length > 0 ? rsCourse[0] : false);
  }

  static async update(updateString, id) {
    const sql = `UPDATE tbl_course SET ${updateString} WHERE id = ${id};`;

    const updatedCourse = await prisma.$executeRawUnsafe(sql);

    return (!!updatedCourse);
  }

  static async delete(id) {
    const sql = `DELETE FROM tbl_course WHERE id = ${id}`;

    const response = await prisma.$executeRawUnsafe(sql);

    return (!!response);
  }
}

export default Course;
