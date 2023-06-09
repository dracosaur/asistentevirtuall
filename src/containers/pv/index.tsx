import Header from "@/components/Header";
import Footer from "@/components/Footer";
import S from "./styles";
import TyComponent from "@/components/TyComponent";

export default function PV() {
  return (
    <S.Container>
      <Header />
      <TyComponent />
      <S.AboutContainer>
          <S.AboutTitle>{'Por qué ser Asistente Virtual'}</S.AboutTitle>
          <S.AboutSubtitle>{'ES EL TRABAJO PERFECTO PARA TI'}</S.AboutSubtitle>
          <S.AboutText>{'¿Y si te decimos que puedes ser un profesional muy valorado con solo hacer funciones básicas de organización desde tu casa, como: contestar emails, mensajes, concertar reuniones y publicar fotos? ¡Este es el trabajo de un Asistente Virtual!'}</S.AboutText>
          <S.AboutText>{'El Asistente Virtual es una de las profesiones de más rápido crecimiento en la actualidad. Con el creciente número de comercio y servicios en Internet, esta profesión se ha vuelto extremadamente importante para las empresas. Una empresa que contrata a un Asistente Virtual en estos días ahorra tiempo y dinero, ¡y tú ganas al convertirte en un profesional con un trabajo simple y muy valorado! Es una opción de carrera que te brinda la flexibilidad de trabajar donde y cuando quieras, ¡ganando un excelente salario!'}</S.AboutText>
      </S.AboutContainer>
      <S.LastStepsContainer>
        <S.Modal>
          <S.ModalTitle>{'QUAL É O PROXIMO PASSO'}</S.ModalTitle>
          <S.ModalContent>
          <S.LeftContent>
            <img src='imagens para pv (8).png' />
          </S.LeftContent>
          <S.RightContent>
          <S.QuestionContainer>
            <S.Question>{'1) Completa tu entrenamiento'}</S.Question>
            <S.Response>{'Este paso es donde aprenderás cómo hacer el trabajo. La idea es ponerlo en marcha rápidamente con nuestro entrenamiento fácil de seguir.'}</S.Response>
          </S.QuestionContainer>
          <S.QuestionContainer>
            <S.Question>{'2) Entra y ponte a trabajar'}</S.Question>
            <S.Response>{'Una vez que completes tu entrenamiento, puedes comenzar a trabajar en tu primer trabajo remunerado.'}</S.Response>
          </S.QuestionContainer>
          <S.QuestionContainer>
            <S.Question>{'3) Recibe el pago'}</S.Question>
            <S.Response>{'Recibe pagos diarios o semanales, en tu cuenta bancaria, vía transferencia.'}</S.Response>
          </S.QuestionContainer>
          </S.RightContent>
          </S.ModalContent>
        </S.Modal>
      </S.LastStepsContainer>
    <S.FeedBack padding={'10% 10% 0'}>
      <S.FeedBackImage>
        <img src='/a (4).jpg'/>
      </S.FeedBackImage>
      <S.FeedBackText width={'60%'} font={'21px'} gap={'16px'}>
        <S.FeedBackTitle font={'42px'}>
          {'¿Por qué Conecta+?'}
        </S.FeedBackTitle>
          <p>{'Tanto si eres principiante como si ya has sido Asistente Virtual, Conecta+ tiene la plataforma ideal para todos, además de nuestro entrenamiento, que te asegura tener conocimientos sobre '} <strong>{'todo lo necesario para ser un asistente de calidad.'}</strong></p>
          <p><strong>{'Muy bueno, ¿no? Pero el verdadero diferencial de nuestra plataforma ni siquiera es este.'}</strong></p>
          <p>{'Contamos con un sistema que brinda '}<strong>{'miles de vacantes todos los días para profesionales autónomos en internet.'}</strong> {'Así es, tendrás un mar de oportunidades, e incluso flexibilidad para negociar tu remuneración.'}</p>
      </S.FeedBackText>
    </S.FeedBack>
    <S.FeedBack padding={'0px 10%'}>
      <S.FeedBackText width={'60%'} font={'22px'} gap={'24px'}>
        <S.FeedBackTitle font={'47px'}>
          {'¿Tu vida cambiará?'}
        </S.FeedBackTitle>
          <p>{'Imagina la siguiente situación: te despiertas, saca tu teléfono o notebook cuando necesitas algo de efectivo, trabajas de 1 a 2 horas al día como Asistente Virtual desde tu habitación (o donde sea) '} <small>{'todo lo necesario para ser un asistente de calidad.'}</small></p>
          <p><strong>{'¿TRABAJARÍAS COMO UN INGRESO EXTRA PARA PAGAR ESA VIEJA DEUDA?'}</strong></p>
          <p><strong>{'¿OBTENDRÍAS UN INGRESO EXTRA PARA PAGAR ESA DEUDA, O CERRARÍA LAS FACTURAS DE FIN DE MES?'}</strong></p>
          <p>{'O, quizá, ¿convertirías esto en un trabajo de tiempo completo para poder brindar una mejor calidad de vida para tú y tu familia? Eso también es totalmente posible como Asistente Virtual, porque '}<strong>{'tú decides cuánto vas a trabajar y negocias cuánto vas a ganar.'}</strong></p>
      </S.FeedBackText>
      <S.Image></S.Image>
    </S.FeedBack>
    <S.FeedBack padding={'5% 0'} width={'-webkit-fill-available'}>
      <S.FeedBackText width={'100%'} font={'22px'} gap={'24px'} alignItems={'center'}>
        <S.FeedBackTitle font={'47px'}>
          {'Soy un principiante, ¿lo lograré?'}
        </S.FeedBackTitle>
        <S.DobleImageContainer>
          <S.FirstContent>
            <img src='/especialista-em-_6_-724x1024.webp' />
          </S.FirstContent>
          <S.SecondContent>
            <S.TextBox>
              <p>{'Nuestro entrenamiento se hace incluso para aquellos que nunca han sido asistentes en su vida.s'}</p>
              <p>{'No hay nada de malo en ser un principiante.'}</p>
              <p>{'Una de las ventajas de ser un asistente home office es que no necesitas calificaciones o años de experiencia como muchos otros trabajos en línea. Las empresas te dan las respuestas a las preguntas más comunes que reciben. Hablas con los clientes que están haciendo preguntas y respondes a sus preguntas'}</p>
              <p>{'Así de simple. Incluso puedes ser un principiante, comenzar tu entrenamiento ahora, terminarlo en unas pocas horas y luego ser contratado para ser un asistente de atención al cliente y recibir un pago por ello.'}</p>
              <p>{'Muy bueno, ¿verdad?'}</p>
            </S.TextBox>
          </S.SecondContent>
        </S.DobleImageContainer>
      </S.FeedBackText>
    </S.FeedBack>
{/*       <S.Footer>
        <Footer />
      </S.Footer> */}
    </S.Container>
  )
}
