import { useContext } from 'react';
import Button from '../../components/baseComponents/Button';
import Input from '../../components/baseComponents/Input';
import clinica_icon from '../../assets/clinica_icon.png';
import trail from '../../assets/trail.png';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { SCREEN_PATHS } from '../../constants/paths';
import * as S from './styles';

const Login: React.FC = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleClick(event: any) {
    event.preventDefault();
    try {
      login({ login: '', password: '' });
      return navigate(SCREEN_PATHS.home);
    } catch (error) {
      /* Tratar Erro  */
      console.log(error);
    }
  }

  return (
    <>
      <S.Container>
        <header>
          <img
            className="logo"
            src={clinica_icon}
            alt="Clinica Caracol Desenvolvimento Infantil e Integração Sensorial"
          />
        </header>
        <S.FormContainer>
          <S.Form>
            <h2>Login</h2>
            <S.InputContainer>
              <label>Email</label>
              <Input id="inputEmail" />
            </S.InputContainer>
            <S.InputContainer>
              <label>Senha</label>
              <Input id="inputPassword" />
            </S.InputContainer>
            <Button onClick={handleClick}>Enviar</Button>
          </S.Form>
        </S.FormContainer>
        <img src={trail} alt="" className="trailTop" aria-hidden />
        <img src={trail} alt="" className="trailBottom" aria-hidden />
      </S.Container>
    </>
  );
};

export default Login;
