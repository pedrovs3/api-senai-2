const bodyContent = (req, res, next) => {
  if (req.body.length < 0) {
    res.status(400).json({ message: 'Nenhum dado enviado.' });
  }
};
