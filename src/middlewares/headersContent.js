const headContent = async (req, res, next) => {
  const headerContentType = req.headers['content-type'];

  if (headerContentType !== 'application/json') {
    res.status(415).json({ message: 'Content-Type incorreto.' });
  }


  next();
};

export default headContent;
