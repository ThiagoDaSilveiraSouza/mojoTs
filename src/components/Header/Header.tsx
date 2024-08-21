import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { MainButton } from "../../styledComponents/MainButton";
import iconInstagram from "../../assets/icon-instagram.png";

const HeaderElement = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  height: 150px;
  padding: 50px 0;
  box-sizing: border-box;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 19px;
  ul {
    display: flex;
    gap: 19px;
    align-items: center;
    list-style: none;
    text-transform: uppercase;
    li {
      a {
        color: white;
        font-size: 15px;
        text-decoration: none;
      }
    }
  }
`;

const SocialMediaButton = styled.button`
  display: flex;
  background: var(--secondary-color);
  border: none;
  outline: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  padding: 0;
  border-radius: 100%;

  &:hover {
    box-shadow: 0 0 3px 0 white;
  }

  img {
    width: 100%;
  }
`;

export const Header = () => {
  return (
    <HeaderElement>
      <Container className="centralizer">
        <a href="#home">
          <img src={logo} alt="Agencia Mojo logo" />
        </a>
        <Nav>
          <ul>
            <li>
              <a href="#quem-nos-somos">Quem Somos</a>
            </li>
            <li>
              <a href="#o-que-fazemos">O que fazemos</a>
            </li>
            <li>
              <a href="#orçamento">Orçamento</a>
            </li>
          </ul>
          <MainButton>Fale conosco</MainButton>
          <SocialMediaButton>
            <img src={iconInstagram} alt="instagram" />
          </SocialMediaButton>
        </Nav>
      </Container>
    </HeaderElement>
  );
};
