class HomeController {
  // Lista (Get)
  async index(req, res) {
    try {
      res.status(200).json({ message: 'Mostra a lista de alunos' });
    } catch (error) {
      res.status(400).json({ error: error.errors.map((err) => err.message) });
    }
    // const aluno = await prisma.aluno.findMany();
    // res.status(200).json({ message: 'Mostra a lista de alunos' });
  }

  async show(req, res) {
    try {
      res.status(200).json({ message: 'Mostra um aluno' });
    } catch (error) {
      res.status(400).json({ error: error.errors.map((err) => err.message) });
    }
  }

  // Store (Post) prisma create
  async store(req, res) {
    try {
      res.status(200).json({ message: 'Cria um novo aluno' });
    } catch (error) {
      res.status(400).json({ error: error.errors.map((err) => err.message) });
    }
  }

  // Update (Put or Patch) find and update
  async update(req, res) {
    try {
      res.status(200).json({ message: 'Atualiza um aluno' });
    } catch (error) {
      res.status(400).json({ error: error.errors.map((err) => err.message) });
    }
  }

  // Delete (Delete) find and delete
  async delete(req, res) {
    try {
      res.status(200).json({ message: 'Deleta um aluno da tabela' });
    } catch (error) {
      res.status(400).json({ error: error.errors.map((err) => err.message) });
    }
  }
}

export default new HomeController();
