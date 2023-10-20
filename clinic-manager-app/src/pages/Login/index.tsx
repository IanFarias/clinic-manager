import { useContext, useState } from 'react';
import Button from '../../components/baseComponents/Button';
import Input from '../../components/baseComponents/Input';
import clinica_icon from '../../assets/clinica_icon.png';
import trail from '../../assets/trail.png';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { SCREEN_PATHS } from '../../constants/paths';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import InputError from '../../components/baseComponents/InputError';
import * as S from './styles';
import { dataFormat } from '../../constants/types';

type FormData = {
  login: string;
  password: string;
};

const formErrors: dataFormat = {
  login: {
    required: 'Informe um email válido.',
  },
  password: {
    required: 'Informe a senha.',
  },
};

const Login: React.FC = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const loginSchema = object({
    login: string().trim().required(),
    password: string().trim().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      await login(data);

      return navigate(SCREEN_PATHS.home);
    } catch (error: any) {
      setErrorMessage('Email ou Senha Inválidos!');
      setError(true);
    }
  };

  const clearMessages = () => {
    setError(false);
    setErrorMessage('');
  };

  return (
    <>
      <S.Container>
        <header>
          <a href="/">
            <img
              className="logo"
              src={clinica_icon}
              alt="Clinica Caracol Desenvolvimento Infantil e Integração Sensorial"
            />
          </a>
        </header>
        <S.FormContainer>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
            <S.InputContainer>
              <label htmlFor="inputEmail">Email</label>
              <Input
                id="inputEmail"
                type="email"
                {...register('login', { onChange: () => clearMessages() })}
              />
              {errors.login?.type && (
                <InputError>
                  {formErrors['login'][errors.login?.type]}
                </InputError>
              )}
            </S.InputContainer>
            <S.InputContainer>
              <label htmlFor="inputPassword">Senha</label>
              <Input
                id="inputPassword"
                type="password"
                {...register('password', { onChange: () => clearMessages() })}
              />
              {errors.password?.type && (
                <InputError>
                  {formErrors['password'][errors.password?.type]}
                </InputError>
              )}
            </S.InputContainer>
            {error && <InputError>{errorMessage}</InputError>}
            <Button type="submit">Enviar</Button>
          </S.Form>
        </S.FormContainer>
        <img src={trail} alt="" className="trailTop" aria-hidden />
        <img src={trail} alt="" className="trailBottom" aria-hidden />
      </S.Container>
    </>
  );
};

export default Login;
