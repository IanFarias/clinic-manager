import Button from '../../components/baseComponents/Button';
import Input from '../../components/baseComponents/Input';
import clinica_icon from '../../assets/clinica_icon.png';
import trail from '../../assets/trail.png';
import * as S from './styles';

const Login: React.FC = () => {
  return ( 
    <>
      <S.Container>
        <header>
          <img
            className="logo"
            src = {clinica_icon}
            alt="Clinica Caracol Desenvolvimento Infantil e Integração Sensorial"
          />
        </header>
        <S.FormContainer>
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
        </S.FormContainer>
        <img src={trail} alt="" className="trailTop" aria-hidden />
        <img src={trail} alt="" className="trailBottom" aria-hidden />
      </S.Container>
    </>
  );
};

export default Login;
