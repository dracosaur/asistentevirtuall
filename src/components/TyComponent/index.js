
import { useEffect } from 'react';
import S from './styles';

export default function TyComponent()  {
    useEffect(() => {
        if (document && document ) {
            var s = document?.createElement("script");
            s.src="https://scripts.converteai.net/817bd58d-9ef6-4339-97a6-a374233fe748/players/6446b61ba0c004000943866b/player.js",
            s.async=!0,document.head.appendChild(s);
        }

    }, [ ])

  return (
    <S.Container>
        <S.ModalContainer>
            <S.LeftContent>
                <div id="vid_6446b61ba0c004000943866b" >
                        <img id="thumb_6446b61ba0c004000943866b" src="https://images.converteai.net/817bd58d-9ef6-4339-97a6-a374233fe748/players/6446b61ba0c004000943866b/thumbnail.jpg" />
                <div id="backdrop_6446b61ba0c004000943866b" ></div>
                </div>
            </S.LeftContent>
            <S.RightContent>
                <img src='/logos e fundos para paginas (41).png' />
                <S.Text>
                    {'¡Comienza a ganar'}<small>{' US$ 8 - US$ 16 por hora '}</small>{'haciendo trabajos de Asistente Virtual todavía hoy!'}
                </S.Text>
            </S.RightContent>
        </S.ModalContainer>
    </S.Container>
  )}