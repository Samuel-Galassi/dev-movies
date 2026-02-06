import { Container, Content, Text } from './styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Content>
        <Text>
          DevBills {currentYear} - Desenvolvido por{' '}
          <a href="https://github.com/Samuel-Galassi">Samuel Galassi</a> com{' '}
          <strong>JavaScript</strong> & <strong>React</strong>
        </Text>
      </Content>
    </Container>
  );
};

export default Footer;
