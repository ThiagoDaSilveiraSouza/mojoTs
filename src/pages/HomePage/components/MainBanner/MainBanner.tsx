import styled from "styled-components";
import videoBanner from "../../../../assets/banner.mp4";
import { MainButton } from "../../../../styledComponents/MainButton";

const Section = styled.section`
  position: relative;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  overflow: hidden;
  height: 920px;
  video {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    object-fit: cover;
    object-position: center;
    width: 100%;
    z-index: -1;
  }
  .centralizer {
    display: flex;
    height: 100%;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  flex: 0 1 472px;
  display: flex;
  flex-direction: column;
  gap: 38px;
  h1 {
    font-size: 98px;
    color: white;
    line-height: 85px;
    margin: 0;
    > div {
      color: var(--primary-color);
    }
  }
  h4 {
    margin: 0;
    font-size: 23px;
    color: white;
    font-weight: 200;
  }
`;

export const MainBanner = () => {
  return (
    <Section id="home" className="page-section">
      <video autoPlay={true} loop={true} muted={true}>
        <source src={videoBanner} type="video/mp4" />
      </video>
      <div className="centralizer">
        <TextContainer>
          <h1>
            Descubra <div>seu mojo</div>
          </h1>
          <h4>
            Guiamos sua marca para além do óbvio, projetando experiências que
            transformam.
          </h4>
          <MainButton $backgroundcolor="transparent" $fontcolor="white">
            Saiba mais
          </MainButton>
        </TextContainer>
      </div>
    </Section>
  );
};
