import styled from 'styled-components';

export const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5rem;
  margin-top: 10rem;
`;
export const Video = styled.video`
  border-radius: 1rem;
  width: 100%;
`;

export const VideoContainer = styled.div`
  flex: 2 1 42rem; // initial value: 1 1 42rem
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VideoControlsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;
export const VideoControls = styled.div`
  margin: 2.5rem 0;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.white};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.brightAqua};
  }
`;
export const ContentContainer = styled.div`
  flex: 8 1 42rem; // initial value: 1 1 42rem
  margin-bottom: 5rem;
  & span {
    color: ${({ theme }) => theme.brightAqua};
    font-size: 2rem;
  }
  & h3 {
    color: ${({ theme }) => theme.white};
    font-size: 3.5rem;
    margin-top: 0.5rem;
  }
  & p {
    color: ${({ theme }) => theme.lightColor};
    font-size: 1.4rem;
    line-height: 2;
    padding: 1rem 0;
  }
`;
