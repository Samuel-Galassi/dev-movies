import styled, { keyframes } from 'styled-components';

const scale = keyframes`
    from {
        transform: scale(0);   
    }
    to{
        transform: scale(1);
    }
`;

export const Background = styled.div`
    background-image: url(${(props) => props.img});
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    max-width: 1500px;
    
`;

export const Info = styled.div`
    z-index: 2;
    padding: 20px;
    width: 50%;

    h1{
        font-size: 5rem;
        font-weight: 700;
        color: #ffffff;
    }

    p{
        font-size: 20px;
        font-weight: 500;
        color: #ffffff;
        margin-top: 30px;
        margin-bottom: 20px;
    }
`;

export const Poster = styled.div`
z-index: 3;
    img{
        border-radius: 30px;
        width: 400px;
        animation: ${scale} 0.3s linear ;
    }
`;
export const ContainerButtons = styled.div`
    display: flex;    
    gap: 20px;
    margin-top: 30px;
`;
