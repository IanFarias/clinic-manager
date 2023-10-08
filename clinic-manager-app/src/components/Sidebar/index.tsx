import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Button from '../baseComponents/Button';
import Icon from '../Icon';
import Link from '../baseComponents/Link';
import clinica_icon_small from '../../assets/clinica_icon_small.png';
import MenuHamburguer from '../MenuHamburguer';
import * as S from './styles';

const NAV_LINKS = [
  { path: '#', name: 'Pacientes', icon: 'patient', isAdmin: false },
  { path: '#', name: 'Profissionais', icon: 'professional', isAdmin: true },
  { path: '#', name: 'Atendimentos', icon: 'appointment', isAdmin: false },
  { path: '#', name: 'Financeiro', icon: 'finance', isAdmin: true },
  { path: '#', name: 'Agenda', icon: 'calendar', isAdmin: false },
  { path: '#', name: 'Relatórios', icon: 'notepad', isAdmin: false },
];

type Props = {
  isOpen: boolean;
  handleMenu: () => void;
};

const SideBar: React.FC<Props> = ({ isOpen, handleMenu }) => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <S.Nav $isOpen={isOpen}>
      <div>
        <S.NavHeader>
          <img
            className="logo"
            src={clinica_icon_small}
            alt="Clinica Caracol desenvolvimento infantil e integração sensorial"
          />

          <MenuHamburguer
            isOpen={isOpen}
            onClick={handleMenu}
            className="button-hamburguer"
          />
        </S.NavHeader>
        <S.List>
          {NAV_LINKS.map((item, index) => {
            return (
              <S.ListItem key={index + '-menu-item'}>
                <Link to={'#'}>
                  <Icon size={24} icon={item.icon} />
                  <span>{item.name}</span>
                </Link>
              </S.ListItem>
            );
          })}
        </S.List>
      </div>
      <S.NavFooter $isOpen={isOpen}>
        <S.User>
          <S.Avatar aria-hidden>{user?.user[0].toUpperCase()}</S.Avatar>
          <S.Credentials>
            <span
              className="credentials-usermane"
              aria-label={user?.user}
              title={user?.user}
            >
              {user?.user}
            </span>
            <span>
              {user?.role === 'ADMIN' ? 'Administrador' : 'Profissional'}
            </span>
          </S.Credentials>
        </S.User>
        <Button
          type="button"
          height={40}
          width={40}
          variant="iconButton"
          onClick={handleLogout}
          disabled={!open}
        >
          <Icon size={24} icon={'logout'} />
        </Button>
      </S.NavFooter>
    </S.Nav>
  );
};

export default SideBar;
