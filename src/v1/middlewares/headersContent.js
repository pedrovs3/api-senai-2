import { ERRORS_MESSAGE } from '../config/messages';

const headContent = async (req, res, next) => {
  const headerContentType = req.headers['content-type'];

  if (headerContentType !== 'application/json') {
    res.status(415).json({ message: ERRORS_MESSAGE.CONTENT_TYPE });
  }

  next();
};

export default headContent;
