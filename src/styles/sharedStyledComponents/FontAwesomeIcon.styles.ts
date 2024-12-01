import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

interface StyledIconProps {
  $paddingRight?: string;
  $marginBottom?: string;
  $fontSize?: string;
}

export const StyledIcon = styled(FontAwesomeIcon)<StyledIconProps>`
  color: ${({ theme }) => theme.brightAqua};
  padding-right: ${({ $paddingRight }) => $paddingRight || '0'};
  padding-bottom: 0;
  margin-bottom: ${({ $marginBottom }) => $marginBottom || '0'};
  font-size: ${({ $fontSize }) => $fontSize || 'inherit'};
`;
