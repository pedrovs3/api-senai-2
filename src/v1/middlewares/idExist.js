import { ERRORS_MESSAGE } from '../config/messages';
import Aluno from '../models/Aluno';

let idExists;
export default idExists = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aluno = await Aluno.selectAluno(id);

    if (!aluno) throw new Error(ERRORS_MESSAGE.INEXISTENT);
    return next();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
