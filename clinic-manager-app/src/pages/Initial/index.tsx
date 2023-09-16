import clinica_icon from '../../assets/clinica_icon.png';
import peca_vermelha from '../../assets/peca-vermelha.png';
import preca_amarela from '../../assets/peca-amarela.png';
import peca_verde from '../../assets/peca-verde.png';
import trail from '../../assets/trail.png';
import Link from '../../components/baseComponents/Link';
import * as S from './styles';

const Initial: React.FC = () => {
  return (
    <S.Container>
      <h1>Bem-Vindo!</h1>

      <img className="logo" src={clinica_icon} />

      <Link variant="button" variantButton="terciary" to="/login">
        Entrar
      </Link>
      <S.PuzzlePiecesConteiner>
        <img src={peca_vermelha} className="piece_red" alt="" />
        <img src={preca_amarela} className="piece_yellow" alt="" />
        <img src={peca_verde} className="piece_green" alt="" />
      </S.PuzzlePiecesConteiner>

      <img src={trail} alt="" className="trailTop" />
      <img src={trail} alt="" className="trailBottom" />
    </S.Container>
  );
};

export default Initial;
