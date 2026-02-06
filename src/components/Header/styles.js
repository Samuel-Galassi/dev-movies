import styled from 'styled-components';

export const Container = styled.div`
min-height: 100px;
   z-index: 4;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
    background-color: ${(props) => (props.backgroundScroll ? '#111111' : 'transparent')};
    transition: background-color 0.6s ease-in-out;
    img{
        width: 25%;
    }

    .autocomplete {
  position: absolute;
  top: 75px;
  width: 350px;
  background: #111;
  border-radius: 8px;
  overflow: hidden;
  z-index: 999;
}

.item {
  all: unset;
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding: 8px;
}

.item:hover {
  background: #222;
}

.item img {
  width: 40px;
  border-radius: 4px;
  
}

.item span {
  font-size: 20px;
  color: white;
  padding-left: 10px;
}
`;

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 50px;
`;

export const Li = styled.li`
font-weight: 600;
cursor: pointer;
font-size: 28px;
position: relative;

a {
    text-decoration: none;
    color: #ffffff;
}


&::after{
    content: '';
    height: 3px;
    width: ${(props) => (props.isActive ? '100%' : '0')};
    background-color: ${(props) => (props.backgroundScroll ? '#8f6edb' : '#189b20')};
    position: absolute;
    bottom: -10px;
    transition: width 0.4s ease-in-out;
    left: 50%;
    transform: translateX(-50%);
}

&:hover::after{
    width: 100%;
    color: ${(props) => (props.backgroundScroll ? '#8f6edb' : '#189b20')};
}
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const InputSearch = styled.input`
  background-color: #0f0f0f;
  border: 2px solid transparent;
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 16px;
  color: #ffffff;
  width: 220px;

  outline: none;
  transition: 0.3s;

  &::placeholder {
    color: #888;
    font-size: 13.2px;
  }

  &:focus {
    border-color: #8f6edb;
    box-shadow: 0 0 10px rgba(143, 110, 219, 0.4);
  }
`;

export const ButtonSearch = styled.button`
  background: linear-gradient(135deg, #8f6edb, #6c4ccf);
  border: none;
  border-radius: 30px;
  padding: 10px 20px;

  color: white;
  font-weight: 600;
  font-size: 14px;

  cursor: pointer;
  transition: 0.25s;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
  }

  &:active {
    transform: scale(0.96);
  }
`;
