import styled from 'styled-components';

export const Container = styled.main`   
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    max-width: 35%;
    align-items: center;

    h2{
        text-transform: uppercase;
        letter-spacing: 3px;
    }

    button {
        max-width: 150px;
    }
`;

export const Form = styled.form`
    background-color: ${({theme}) => theme.colors.lightYellow};
    border-radius: 13px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    padding: 20px 0 60px 0;
`;

export const InputContainer = styled.div`
    width: 50%;
`;
