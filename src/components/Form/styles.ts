import styled from "styled-components";

export default {
    Container: styled.div`
        width: 100%;
        padding: 0 24px;

    `,
    Form: styled.form`
        display: flex;
        flex-direction: column;
    `,
    Input: styled.input`
        width: -webkit-fill-available;

        margin: 4px 0;
        background: white;
        font-size: 16px;
        color: #757575;
        font-weight: 400;
        border: 1px solid rgb(0, 0, 0);
        padding: 12px 18px;
        vertical-align: middle;
        line-height: 1.4;
        min-height: 40px;
        border-radius: 10px;
        box-shadow: 0 0 0 3px rgb(0 0 0 / 5%);
    `,
    InputContainer: styled.div`
    `,
    SubmitButton: styled.button`
        background: #61CE70;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        color: rgb(255, 255, 255);
        margin: 8px 0;

        display: block;
        padding: 20px 40px;
        text-transform: uppercase;
        width: 100%;
        font-weight: 900;
        font-size: 18px;
    `,
};  