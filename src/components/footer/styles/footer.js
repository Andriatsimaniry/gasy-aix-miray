import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 10px;
  border-spacing: 5px;
  height:auto;
  width:100%;
  background: radial-gradient(circle, rgba(92,39,251,1) 0%, rgba(112,71,247,1) 100%);

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
  
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 16px;
  text-decoration: none;

  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 22px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
// export const Copyright = styled.p`
// border-right: 2px solid white;
// height: 270px;




//   @media (max-width: 504px) {
//     height: 0px;
//     width: auto; 
//     border-bottom: 1px solid white; 
//   }
// `;

