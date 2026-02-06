import styled, { keyframes } from 'styled-components';

const scale = keyframes`
    from {
        transform: scale(0);   
    }
    to{
        transform: scale(1);
    }
`;

export const Title = styled.h4`
    color: #ffffff;
    font-size: 28px;
    font-weight: 700

`;

export const Container = styled.div`
    display: flex;
    margin-top: 30px;
    gap: 10px;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img{
        height: 200px;
        border-radius: 30px;
        margin-right: 5px;
        animation: ${scale} 0.3s linear ;
    }

    p{
        color:#ffffff;
    }

`;
