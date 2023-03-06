import Link from 'next/link';
import { useRouter } from 'next/router';
import {Container, MenuHeader, MenuItem} from './styles';

export default function Header() {
  const router = useRouter()

  return (
   <Container>
    <Link href="/">
    <h1>Lacrei</h1>
    </Link>
    
    <MenuHeader>
      <Link href="/">
      <MenuItem color={router.pathname === "/" ? "#018762" : "#1f1f1f"}>Home</MenuItem>
      </Link>
      
      <Link href="/pessoa-usuaria">
      <MenuItem color={router.pathname === "/pessoa-usuaria" ? "#018762" : "#1f1f1f"}>Pessoa Usuária</MenuItem>
      </Link>

      <Link href="/profissional">
      <MenuItem color={router.pathname === "/profissional" ? "#018762" : "#1f1f1f"}>Profissional</MenuItem>
      </Link>
    </MenuHeader>
   </Container>
  );
}

