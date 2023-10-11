import Icon from '../../components/Icon';
import PageWrapper from '../../components/PageWrapper';
import Button from '../../components/baseComponents/Button';
import Input from '../../components/baseComponents/Input';
import VisuallyHidden from '../../components/baseComponents/VisuallyHidden';
import * as S from './styles';

const RegisterPatient: React.FC = () => {
  return (
    <PageWrapper>
      <S.Main>
        <S.Title>Cadastro de Paciente</S.Title>
        <S.Form>
          <S.Fieldset>
            <legend>
              <VisuallyHidden>Dados do paciente</VisuallyHidden>
            </legend>
            <S.InputWrapper>
              <S.InputContainer>
                <label htmlFor="name">Nome</label>
                <Input id="name" />
              </S.InputContainer>
              <S.InputContainer>
                <label htmlFor="street">Rua</label>
                <Input id="street" />
              </S.InputContainer>
              <S.InputContainer>
                <label htmlFor="city">Cidade</label>
                <Input id="city" />
              </S.InputContainer>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.InputContainer>
                <label htmlFor="birthdate">Data de Nascimento</label>
                <Input id="birthdate" />
              </S.InputContainer>
              <div style={{ display: 'flex', gap: '40px' }}>
                <S.InputContainer className="number">
                  <label htmlFor="number">Número</label>
                  <Input id="number" />
                </S.InputContainer>
                <S.InputContainer className="neighborhood">
                  <label htmlFor="neighborhood">Bairro</label>
                  <Input id="neighborhood" />
                </S.InputContainer>
              </div>
              <S.InputContainer className="complement">
                <label htmlFor="complement">Complemento</label>
                <Input id="complement" />
              </S.InputContainer>
            </S.InputWrapper>
          </S.Fieldset>
          <S.GuardianFieldset>
            <S.AddButtonWrapper>
              <legend>Responsáveis</legend>
              <Button
                variant="iconButton"
                type="button"
                aria-label="Adicionar Responsável "
              >
                <Icon icon="addButton" size={32} />
              </Button>
            </S.AddButtonWrapper>
            <S.GuardianTable>
              <thead>
                <tr>
                  <th>
                    <VisuallyHidden>Nome</VisuallyHidden>
                  </th>
                  <th>
                    <VisuallyHidden>CPF</VisuallyHidden>
                  </th>
                  <th>
                    <VisuallyHidden>Parentesco</VisuallyHidden>
                  </th>
                  <th>
                    <VisuallyHidden>Tipo</VisuallyHidden>
                  </th>
                  <th>
                    <VisuallyHidden>Número</VisuallyHidden>
                  </th>
                  <th>
                    <VisuallyHidden>Opções</VisuallyHidden>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Maria da Silva Ferreira</td>
                  <td>99999999999</td>
                  <td>MÃE</td>
                  <td>Principal</td>
                  <td>51999999999</td>
                  <td className="options-column">
                    <Button
                      variant="iconButton"
                      type="button"
                      aria-label="Adicionar Responsável "
                    >
                      <Icon icon="pencil" size={24} />
                    </Button>
                    <Button
                      variant="iconButton"
                      type="button"
                      aria-label="Adicionar Responsável "
                    >
                      <Icon icon="trashCan" size={24} />
                    </Button>
                  </td>
                </tr>
                <tr className="grey">
                  <td>João da Silva</td>
                  <td>99999999999</td>
                  <td>PAI</td>
                  <td>Principal</td>
                  <td>51999999999</td>
                  <td className="options-column">
                    <Button
                      variant="iconButton"
                      type="button"
                      aria-label="Adicionar Responsável "
                    >
                      <Icon icon="pencil" size={24} />
                    </Button>
                    <Button
                      variant="iconButton"
                      type="button"
                      aria-label="Adicionar Responsável "
                    >
                      <Icon icon="trashCan" size={24} />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </S.GuardianTable>
          </S.GuardianFieldset>

          <Button className="button-register" variant="terciary" type="submit">
            Cadastrar
          </Button>
        </S.Form>
      </S.Main>
    </PageWrapper>
  );
};

export default RegisterPatient;
