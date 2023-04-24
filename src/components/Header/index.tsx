import { useRouter } from 'next/router';
import S from './styles';

const Header = () =>  {
  const router = useRouter();

  return (
    <S.Container>
      <S.Content onClick={() => router.push('/')}>
        <S.Image src='https://asistentevirtuallatama.com/wp-content/uploads/2023/03/conecta-logo-branco-1-1024x326.png'/>
      </S.Content>
    </S.Container>
  )
}

export default Header;
