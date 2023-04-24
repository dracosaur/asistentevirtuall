import React, { useState } from 'react';
import S from './styles';

export function Form({backStep}) {
    
    const handdleSubmit =  () => {
        const queryStringCapt = window.location.search;
        const urlParamsCapt = new URLSearchParams(queryStringCapt);
        const utm_campaign_capt = urlParamsCapt.get("utm_campaign");
        const utm_medium_capt = urlParamsCapt.get("utm_medium");
        const utm_source_capt = urlParamsCapt.get("utm_source");
        const utm_content_capt = urlParamsCapt.get("utm_content");
        const utm_term_capt = urlParamsCapt.get("utm_term");

        document.getElementById("utm_campaign").value=utm_campaign_capt;
        document.getElementById("utm_medium").value=utm_medium_capt;
        document.getElementById("utm_source").value=utm_source_capt;
        document.getElementById("utm_content").value=utm_content_capt;
        document.getElementById("utm_term").value=utm_term_capt;
    }

  return (
    <S.Container>
    <div>
        <S.Form method="POST" action="https://immersioltda49907.activehosted.com/proc.php" id="form_461"> 
            <input type="hidden" name="u" value="461" /> 
            <input type="hidden" name="f" value="461" /> 
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" /> 
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" /> 
            <input type="hidden" name="or" value="82302fe297280723a16144784e5ea76" /> 

            <div >
                <S.InputContainer >
                    <S.Input type="text" name="fullname" id="fullname" data-name="fullname"
                        placeholder="Escriba su nombre" required />
                </S.InputContainer>

                <S.InputContainer >
                    <S.Input type="email" name="email" id="email" data-name="email" placeholder="Escriba su correo eletrónico"
                        required />
                </S.InputContainer>

                <div onClick={() => handdleSubmit()}>
                    <S.SubmitButton>ENVIAR FORMULARIO</S.SubmitButton>
                </div>

                <input type="hidden" name="field[2]" id="utm_campaign" value="" />
                <input type="hidden" name="field[3]" id="utm_medium" value="" />
                <input type="hidden" name="field[4]" id="utm_source" value="" />
                <input type="hidden" name="field[5]" id="utm_term" value="" />
                <input type="hidden" name="field[6]" id="utm_content" value="" />
            </div>
        </S.Form>
    </div>
    </S.Container>
  );
}
