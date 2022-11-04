module.exports = (req, res, next) => {
  if (!req.body.age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }

  const { age } = req.body;
  
  if (Number(age) < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }

  next();
};