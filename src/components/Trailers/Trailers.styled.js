import styled from 'styled-components';

export const StyledList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 20px 10px;
`;

export const StyledItem = styled.li`
  width: fit-content;
  padding-left: 10px;
  font-weight: 500;

  transition: background-color ${p => p.theme.animation.easeFast};

  :hover {
    background-color: ${p => p.theme.colors.main};
  }
`;
