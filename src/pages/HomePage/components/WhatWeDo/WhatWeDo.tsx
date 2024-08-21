import styled from "styled-components";
import { CardData } from "./data";
import { MainButton } from "../../../../styledComponents/MainButton";
import { Title } from "../../../../styledComponents";

const Section = styled.section`
  background: var(--secondary-color);
  padding: 90px 0;

  .centralizer {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 97px;
`;
const Card = styled.div`
  flex: 0 1 315px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  img {
    width: 80px;
    height: 80px;
  }
  h4 {
    color: white;
    text-align: center;
    font-size: 28px;
    width: 250px;
    margin: 0;
  }
  p {
    color: white;
    text-align: center;
    font-size: 15px;
    font-weight: 200;
    margin: 0;
  }
`;

export const WhatWeDo = () => {
  return (
    <Section>
      <div className="centralizer">
        <Title>O Que Fazemos</Title>
        <CardsContainer>
          {CardData.map(({ id, imgUrl, title, text }) => {
            return (
              <Card key={id}>
                <img src={imgUrl} alt={title} />
                <h4>{title}</h4>
                <p>{text}</p>
                <MainButton>Faça um orçamento</MainButton>
              </Card>
            );
          })}
        </CardsContainer>
      </div>
    </Section>
  );
};
