import styled from "styled-components";
import whoWheAreImg from "../../../../assets/who-whe-are.png";
import { MainButton } from "../../../../styledComponents/MainButton";
import { Title, UpperTitle } from "../../../../styledComponents";

const Section = styled.section`
  padding: 80px 0;
  .centralizer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 126px;
  }
`;

const ImageContainer = styled.div`
  flex: 0 1 502px;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const TextContainer = styled.div`
  flex: 0 1 512px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
`;

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    margin: 0;
    font-size: 16px;
    font-weight: 300;

    strong {
      font-weight: 600;
      font-size: 20px;
    }
  }
`;

export const WhoWheAre = () => {
  return (
    <Section id="quem-nos-somos">
      <div className="centralizer">
        <ImageContainer>
          <img src={whoWheAreImg} alt="Quem nós somos" />
        </ImageContainer>
        <TextContainer>
          <div>
            <UpperTitle>Quem Somos</UpperTitle>
            <Title $textaling="left" $color={2}>
              A Mojo
            </Title>
          </div>
          <ParagraphContainer>
            <p>
              Na Agência Mojo, acreditamos que toda marca possui um 'mojo' –
              aquele momento mágico em que o propósito, a paixão e o poder se
              encontram, resultando em algo verdadeiramente especial. O 'mojo' é
              o ponto em que sua marca brilha e se conecta de maneira única com
              o mundo.
            </p>
            <p>
              Nosso trabalho é ajudar você a descobrir, cultivar e expressar
              esse 'mojo'. Guiamos sua marca para além do óbvio, projetando
              experiências que não apenas atraem, mas transformam.
            </p>
            <p>
              <strong>
                Combinando inovação, estratégia e criatividade, criamos soluções
                que elevam a identidade e o impacto da sua marca.
              </strong>
            </p>
          </ParagraphContainer>
          <MainButton $fontcolor="white">Fale Conosco</MainButton>
        </TextContainer>
      </div>
    </Section>
  );
};
