import styled from 'styled-components';

export const Main = styled.main`
  padding-top: 40px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  display: block;
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  padding-bottom: 30px;
  margin: 0 auto;
  max-width: 20%;
`;

export const Form = styled.form`
  padding-top: 40px;
  margin: 0 auto;
  width: 100%;
  max-width: 80%;

  .button-register {
    width: 200px;
    margin: 0 auto;
    margin-top: 50px;
  }
`;

export const Fieldset = styled.fieldset`
  border: none;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(2, 40%);
  margin: 0 auto;
  max-width: 90%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputContainer = styled.div`
  &.neighborhood {
    flex-grow: 1;
  }

  label {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.title};
  }
`;

export const GuardianFieldset = styled.fieldset`
  border: none;
  display: flex;
  margin: 0 auto;
  max-width: 90%;
  margin-top: 60px;
  flex-direction: column;

  legend {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const AddButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const GuardianTable = styled.table`
  font-weight: bold;
  border-spacing: 0;

  tr {
    height: 62px;

    :nth-child(1) {
      border-left: none;
    }
  }

  td {
    height: 100%;
    text-align: center;
    border-left: 1px solid ${({ theme }) => theme.colors.grey[300]};
  }

  tr.grey {
    background-color: ${({ theme }) => theme.colors.grey[300]};
    td {
      border-left: 1px solid ${({ theme }) => theme.colors.white};
    }
  }

  .options-column {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 62px;
    gap: 24px;
  }
`;
