/**
 * Objetivo: Arquivo responsavel pela manipulaçao, tratamento, recebebimento,
 * e envio de dados entre a Api e o Model
 * Autor: Pedro Vieira
 * data_criacao: 06/10/2022
 * versao: 1.0.0
 */

import { ERRORS_MESSAGE, SUCCESSFUL_MESSAGE } from '../config/messages';
import Aluno from '../models/Aluno';

class AlunoController {
  // Lista (Get)
  async index(req, res) {
    try {
      const alunos = await Aluno.selectAllAlunos();

      // // Mudando bigInt para Number ( SUBSTITUIDO PELO CAST NO BANCO )
      // alunos.forEach((aluno) => {
      //   aluno.id = Number(aluno.id);
      // });

      // Foi utilizado o DATE_FORMAT para converter a data para o padrao DD-MM-YYYY
      return res.status(200).json({ alunos });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  }

  // Exibe 1
  async show(req, res) {
    try {
      const aluno = await Aluno.selectAluno(req.params.id);

      // // Mudando bigInt para Number ( SUBSTITUIDO PELO CAST NO BANCO DE DADOS )
      // aluno.id = Number(aluno.id);

      // Foi utilizado o DATE_FORMAT para converter a data para o padrao DD-MM-YYYY
      return res.status(200).json({ aluno });
    } catch (error) {
      return res.status(500).json({
        message: ERRORS_MESSAGE.INTERNAL_ERROR_DB,
        code: 500,
        message_db: error.meta.message,
      });
    }
  }

  // Store (Post) prisma create
  async store(req, res) {
    try {
      const response = await Aluno.insertAluno(req.body);

      return res.status(201).json({ message: SUCCESSFUL_MESSAGE.STUDENT_CREATED });
    } catch (error) {
      return res.status(500).json({
        message: ERRORS_MESSAGE.INTERNAL_ERROR_DB,
        code: 500,
        message_db: error.meta.message,
      });
    }
  }

  // Update (Put or Patch) find and update
  async update(req, res) {
    try {
      const { id } = req.params;

      // **** FAZER FUNÇAO PARA VERIFICAR A AUSENCIA DO ID NA ROTA ********* \\

      // Update personalizado para chaves especificas
      const updateString = Object.entries(req.body).map(([key, value]) => `${key} = '${value}',`).join(' ').slice(0, -1);

      // const alunoAtualizado = await Aluno.updateAluno(req.body, req.params.id)
      await Aluno.updateAluno(updateString, id);

      return res.status(200).json({ message: SUCCESSFUL_MESSAGE.UPDATE_ITEM });
    } catch (error) {
      return res.status(500).json({
        message: ERRORS_MESSAGE.INTERNAL_ERROR_DB,
        code: 500,
        message_db: error.meta.message,
      });
    }
  }

  // Delete (Delete) find and delete
  async delete(req, res) {
    try {
      const { id } = req.params;
      await Aluno.deleteAluno(id);

      return res.status(200).json({ message: SUCCESSFUL_MESSAGE.DELETE_ITEM });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new AlunoController();
