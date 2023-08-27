import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} ${theme.spacings.medium};
  `}
`;
