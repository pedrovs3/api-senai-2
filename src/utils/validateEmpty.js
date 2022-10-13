import emailValidator from './emailValidator';

const validateEmpty = (body) => {
  const {
    nome, foto, rg, cpf, email, data_nascimento,
  } = body;

  if (Object.values(body).includes('')) {
    return false;
  }

  if (!emailValidator(email)) {
    return false;
  }

  return true;
};

export default validateEmpty;
