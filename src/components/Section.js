import styled from "styled-components";

const SSection = styled.div`
  margin-top: 50%;
  padding: 0 40px;
  h3 {
    font-size: 46px;
    font-weight: 200;
  }
`;

const TempWrap = styled.div`
  display: flex;
  justify-content: space-between;
  height: 180px;
`;

const CurrentTemp = styled.div`
  font-size: 180px;
  font-weight: 200;
  span {
    font-size: 90px;
    transform: translate(200px, -170px);
    display: block;
  }
`;

const MaxMin = styled.div`
  font-size: 34px;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Num = styled.div`
  padding: 10px 0;
  &:nth-child(1) {
    border-bottom: 1px solid #eee;
  }
`;

export const Section = ({ sectionData }) => {
  return (
    <SSection>
      <h3>{sectionData.weather[0].main}</h3>

      <TempWrap>
        <CurrentTemp>
          {Math.round(sectionData.main.temp)}
          <span>°</span>
        </CurrentTemp>

        <MaxMin>
          <Num>
            {Math.round(sectionData.main.temp_max)}
            <span>°</span>c
          </Num>

          <Num>
            {Math.round(sectionData.main.temp_min)}
            <span>°</span>c
          </Num>
        </MaxMin>
      </TempWrap>
    </SSection>
  );
};
