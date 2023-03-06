import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, MenuFooter, IconsFooter } from "./styles";

export default function Footer() {

  const router = useRouter()

  return (
    <Container>
      <MenuFooter>
        <Link href="/">
        <p style={{ fontWeight: router.pathname === "/" ? 700 : 400}}>Home</p>
        </Link>
        
        <Link href="/pessoa-usuaria">
        <p style={{ fontWeight: router.pathname === "/pessoa-usuaria" ? 700 : 400}}>Pessoa Usuária</p>
        </Link>

        <Link href="/profissional">
        <p style={{ fontWeight: router.pathname === "/profissional" ? 700 : 400}}>Profissional</p>
        </Link>
      </MenuFooter>
      
      <IconsFooter>
        <Link href='https://www.instagram.com/lacrei.saude/'>
        <Image src="/images/instagramLogo.svg" alt="instagramLogo" width={32} height={32}/>
        </Link>

        <Link href='https://www.facebook.com/lacrei.saude'>
        <Image src="/images/facebookLogo.svg" alt="facebookLogo" width={32} height={32}/>
        </Link>

        <Link href='https://www.linkedin.com/company/lacrei/'>
        <Image src="/images/linkedinLogo.svg" alt="linkedinLogo" width={32} height={32}/>
        </Link>
      </IconsFooter>
      <h1>
        Desafio front-end Lacrei
      </h1>
    </Container>
  )
}