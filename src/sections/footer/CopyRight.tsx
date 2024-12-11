// import React from 'react';
import styled from 'styled-components';

export const CopyRight = () => {
  return (
    <CopyRightWrapper>
      <div>
        🤙 Developed by{' '}
        <a href="https://github.com/ZinHoang/triplify">Zin Hoang</a>{' '}
      </div>
      <span> © 2024 </span>
    </CopyRightWrapper>
  );
};

const CopyRightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  padding: 2rem 1rem;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.darkBackgroundColor};
`;
