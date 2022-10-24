import { ERRORS_MESSAGE } from '../config/messages';

const idRequired = (req, res, next) => {
  if (!req.params.id) return next();
  const error = ERRORS_MESSAGE.REQUIRED_ID;
  res.locals.error = error;
  return res.json({ error });
};

export default idRequired;
