/**
 * Objetivo: Arquivo responsavel pela manipulaçao, tratamento, recebebimento,
 * e envio de dados entre a Api e o Model
 * Autor: Pedro Vieira
 * data_criacao: 06/10/2022
 * versao: 1.0.0
 */

import Aluno from '../models/Aluno';

class AlunoController {
  // Lista (Get)
  async index(req, res) {
    try {
      const alunos = await Aluno.selectAllAlunos();

      // Mudando bigInt para Number
      alunos.forEach((aluno) => {
        aluno.id = Number(aluno.id);
      });

      return res.status(200).json({ alunos });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: error.message });
    }
  }

  // Exibe 1
  async show(req, res) {
    try {
      const aluno = await Aluno.selectAluno(req.params.id);
      // Mudando bigInt para Number
      aluno.id = Number(aluno.id);

      return res.status(200).json({ aluno });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Store (Post) prisma create
  async store(req, res) {
    try {
      const addAluno = await Aluno.insertAluno(req.body);

      return res.status(200).json({ message: 'Aluno criado com exito!' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Update (Put or Patch) find and update
  async update(req, res) {
    try {
      const updateString = Object.entries(req.body).map(([key, value]) => `${key} = '${value}',`).join(' ').slice(0, -1);

      const alunoAtualizado = await Aluno.updateAluno(updateString, req.params.id);

      return res.status(200).json(alunoAtualizado);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Delete (Delete) find and delete
  async delete(req, res) {
    try {
      const deletedAluno = await Aluno.deleteAluno(req.params.id);

      return res.status(200).json({ deletedAluno });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new AlunoController();
