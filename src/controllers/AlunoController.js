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

      return res.status(200).json(alunos);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: error.message });
    }
  }

  // Exibe 1
  async show(req, res) {
    try {
      const aluno = await Aluno.selectAluno(req.params.id);

      return res.status(200).json(aluno);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Store (Post) prisma create
  async store(req, res) {
    try {
      return res.status(200).json({ message: 'Cria um novo aluno' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Update (Put or Patch) find and update
  async update(req, res) {
    try {
      return res.status(200).json({ message: 'Atualiza um aluno' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Delete (Delete) find and delete
  async delete(req, res) {
    try {
      return res.status(200).json({ message: 'Deleta um aluno da tabela' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new AlunoController();
