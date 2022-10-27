const validateEmpty = (body) => {
  const {
    nome, foto, rg, cpf, email, data_nascimento, carga_horaria,
  } = body;

  const arrayObrigatorios = [nome, foto, rg, cpf, email, data_nascimento, carga_horaria];

  if (arrayObrigatorios.includes('')) return false;

  return true;
};

export default validateEmpty;
