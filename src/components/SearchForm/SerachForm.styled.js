import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  gap: 5px;
  margin: 20px;
`;

export const LabelStyled = styled.label`
  align-self: center;
`;

export const InputStyled = styled.input`
  border: 1px solid ${p => p.theme.colors.main};
`;

export const ButtonStyled = styled.button`
  display: inline-flex;
  width: fit-content;
  gap: 5px;
  cursor: pointer;
  font-weight: ${p => p.theme.fontWeights.medium};
  padding: 4px 8px;
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.black};
  border: 1px solid ${p => p.theme.colors.main};

  transition: background-color ${p => p.theme.animation.easeFast},
    color ${p => p.theme.animation.easeFast};

  &:hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;
