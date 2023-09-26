import Button from '../../components/baseComponents/Button';
import Input from '../../components/baseComponents/Input';
//import clinica_icon from '../../assets/clinica_icon.png';
import * as S from './styles';

const Login: React.FC = () => {
  return ( 
    <>
      <header>
        <img
          className="logo"
          alt="Clinica Caracol Desenvolvimento Infantil e Integração Sensorial"
        />
      </header>
      <S.Container>
        <S.Form>
          <h2>Login</h2>
          <S.InputContainer>
            <label>Email</label>
            <Input id="inputEmail"/>
          </S.InputContainer>
          <S.InputContainer>
            <label>Senha</label>
            <Input id="inputPassword"/>
          </S.InputContainer>
          <Button>Enviar</Button>
        </S.Form>
      </S.Container>
    </>
  );
};

export default Login;
