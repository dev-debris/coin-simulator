import styled from '@emotion/styled';

function Resume() {
  return (
    <Wrapper>
      <ResumeBlock>Resume</ResumeBlock>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 40px 0;
  max-width: 740px;
  height: 100%;
`;

const ResumeBlock = styled.div`
  padding: 40px;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export default Resume;
