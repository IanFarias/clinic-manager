import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 50%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  text-align: center;
  position: relative;

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: 10px;
  }

  img.logo {
    align-self: center;
  }

  a {
    max-width: 200px;
    align-self: center;
  }

  img.piece_green,
  img.piece_yellow,
  img.piece_red {
    position: absolute;
  }

  img.piece_red {
    top: -108px;
    right: -70vw;
    rotate: -143deg;
    position: absolute;
    z-index: -1;
  }

  img.piece_yellow {
    top: 48px;
    right: -76vw;
    rotate: 63deg;
    position: absolute;
    z-index: -1;
  }

  img.piece_green {
    bottom: -8%;
    right: 20vw;
    rotate: 54deg;
    position: absolute;
    z-index: -1;
  }
`;

export const PuzzlePiecesConteiner = styled.div`
  position: absolute;
  height: 100%;
`;
