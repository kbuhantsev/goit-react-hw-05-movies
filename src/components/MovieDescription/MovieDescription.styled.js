import styled from 'styled-components';

export const FilmDescrContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $main;
  padding: 40px 20px;
  gap: 20px;
  font-weight: 500;
  background-color: white;
  position: relative;
  min-width: 320px;
  width: 100%;
  max-width: 420px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 70px;
    align-items: flex-start;
    padding: 20px 60px 40px 40px;

    width: 700px;
    max-width: none;
  }

  @media screen and (min-width: 1280px) {
    width: 1000px;
    gap: 30px;
    padding: 20px 10px;
  }
`;

export const ImageWrapperStyled = styled.div`
  border-radius: 5px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    flex-basis: 265px;
  }

  @media screen and (min-width: 1280px) {
    flex-basis: 375px;
  }
`;

export const ImageStyled = styled.img`
  width: 100%;
`;

export const DescrWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 240px;

  @media screen and (min-width: 768px) {
    flex-basis: 400px;
  }

  @media screen and (min-width: 1280px) {
    flex-basis: 500px;
  }
`;

export const DescrTitle = styled.p`
  font-size: 24px;
`;

export const DescrList = styled.ul`
  display: flex;
  gap: 8px;
  flex-direction: column;
  list-style: none;
  font-size: 18px;
`;

export const DescrListValues = styled.ul`
  display: flex;
`;

export const DescrListTitle = styled.li`
  width: 50%;
  color: $text-modal-card;
`;
export const DescrListValue = styled.li`
  display: flex;
  width: 50%;
  line-height: 1.3;
`;

export const VoteAccent = styled.span`
  text-align: center;
  color: ${p => p.theme.colors.white};
  border-radius: 5px;
  background-color: ${p => p.theme.colors.accent};
  margin-right: 5px;
  padding-left: 5px;
  padding-right: 5px;
`;
export const Vote = styled.span`
  text-align: center;
  border-radius: 5px;
  background-color: ${p => p.theme.colors.main};
  margin-left: 5px;
  padding-left: 5px;
  padding-right: 5px;
`;
