import Image from "next/image";
import Link from "next/link";
import { Container, MenuFooter, IconsFooter } from "./styles";

export default function Footer() {
  return (
    <Container>
      <MenuFooter>
        <p>Home</p>
        <p>Pessoa Usuária</p>
        <p>Profissional</p>
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