import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Aluno from '../models/Aluno';

const upload = multer(multerConfig).single('foto');

class PhotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) res.status(400).json({ errors: [error.code] });

      try {
        const { filename } = req.file;
        const { id } = req.params;

        const string = `foto = "${filename}"`;

        const photo = await Aluno.updateAluno(string, id);

        res.status(200).json({ success: photo });
      } catch (error) {
        res.status(400).json({ errors: ['Aluno Inexistente'] });
      }
    });
  }
}

export default new PhotoController();
