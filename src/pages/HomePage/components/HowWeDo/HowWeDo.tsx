import styled from "styled-components";
import { Title } from "../../../../styledComponents";
import { CardData } from "./data";

const Section = styled.section`
  .centralizer {
    padding: 90px 0;
    display: flex;
    flex-direction: column;
    gap: 60px;
    box-sizing: border-box;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 73px;
`;
const Card = styled.div`
  flex: 0 1 230px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  div {
    h3 {
      margin: 0;
      text-align: left;
      font-size: 25px;
    }
  }
  p {
    font-size: 15px;
    font-weight: 300;
  }
`;

export const HowWeDo = () => {
  return (
    <Section id="como-fazemos">
      <div className="centralizer">
        <Title $color={2}>Como Fazemos</Title>
        <CardContainer>
          {CardData.map(({ id, title, text }, index) => {
            return (
              <Card key={id}>
                <div>
                  <Title $textaling="left">{index + 1}.</Title>
                  <h3>{title}</h3>
                </div>
                <p>{text}</p>
              </Card>
            );
          })}
        </CardContainer>
      </div>
    </Section>
  );
};
