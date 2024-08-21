import styled from "styled-components";
import {
  Form,
  Input,
  MainButton,
  TextArea,
  Title,
} from "../../../../styledComponents";
import { companyConfigs } from "../../../../configs";
import { ImPhone } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";
import logo from "../../../../assets/logo.svg";

const Container = styled.section`
  display: flex;
  gap: 60px;
  flex-direction: column;
  padding: 90px 0;
  background: #ebebeb;
  .centralizer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
  }
`;

const CompanyDataContainer = styled.div`
  flex: 1 1 270px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  div {
    p {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 18px;
      font-weight: 300;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  width: 206px;
  img {
    width: 100%;
  }
`;
const FormContainer = styled.div`
  flex: 1 1 484px;
`;

export const ChatWithUs = () => {
  return (
    <Container>
      <Title $color={2} $textaling="center">
        Converse Conosco
      </Title>
      <div className="centralizer">
        <CompanyDataContainer>
          <div>
            <p>
              <ImPhone color="#B2CD01" size={20} />
              <strong>{companyConfigs.contact.phone}</strong>
            </p>
            <p>
              <TfiEmail color="#B2CD01" size={20} fill="#B2CD01" />
              {companyConfigs.contact.email}
            </p>
          </div>
          <LogoContainer>
            <img src={logo} alt="logo agencia mojo" />
          </LogoContainer>
        </CompanyDataContainer>
        <FormContainer>
          <Form>
            <Input type="text" placeholder="Nome" />
            <Input type="phone" placeholder="Telefone" />
            <Input type="email" placeholder="email" $size={2} />
            <TextArea placeholder="Mensagem:" />
            <MainButton $fontcolor="white">Enviar</MainButton>
          </Form>
        </FormContainer>
      </div>
    </Container>
  );
};
