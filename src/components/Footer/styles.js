import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #1f2937e3;   /* gray-800 */
  border-top: 1px solid #374151; /* gray-700 */
  padding: 16px 0; /* py-4 */
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Text = styled.p`
  font-size: 14px; /* text-sm */
  color: #cfd4dfc7; /* gray-400 */
  text-align: center;

  

  a {
    color: #ffffff;
    font-weight: 600;
  }

  a:hover{
    color: #ffffffb4;
  }
  strong {
    color: #ffffff;
    font-weight: 600;
  }
`;
