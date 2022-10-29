import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: block;
  height: 100%;
`;

export const GalleryUlStyled = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 20px;
  padding-top: 20px;
  padding-bottom: 40px;
`;

export const GalleryLiStyled = styled.li`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  overflow: hidden;
  flex-basis: 280px;
  transition: transform ${p => p.theme.animation.easeFast};

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 20px * 2) / 3);
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 20px * 3) / 4);
  }

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

export const ImgStyled = styled.img`
  width: 100%;
  /* height: 400px; */

  @media screen and (min-width: 768px) {
    /* height: 450px; */
  }

  @media screen and (min-width: 1280px) {
    /* height: 575px; */
  }
`;

export const DescrListStyled = styled.ul`
  padding: 10px 5px;
  gap: 5px;
`;

export const DescrTitleStyled = styled.p`
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  text-transform: uppercase;
`;

export const DescrGenreStyled = styled.p`
  color: ${p => p.theme.colors.accent};
  font-weight: ${p => p.theme.fontWeights.medium};
`;
