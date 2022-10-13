import emailValidator from './emailValidator';

const validateEmpty = (body) => {
  const {
    nome, foto, rg, cpf, email, data_nascimento,
  } = body;

  const arrayObrigatorios = [nome, foto, rg, cpf, email, data_nascimento];

  if (arrayObrigatorios.includes('')) {
    return false;
  }

  if (!emailValidator(email)) {
    return false;
  }

  return true;
};

export default validateEmpty;
