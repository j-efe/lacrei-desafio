import {Container, MenuHeader} from './styles';

export default function Header() {
  return (
   <Container>
    <h1>Lacrei</h1>
    <MenuHeader>
      <p>Home</p>
      <p>Pessoa Usuária</p>
      <p>Profissional</p>
    </MenuHeader>
   </Container>
  );
}