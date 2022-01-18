import styled from "styled-components";

const StyledHome = styled.div`
background-color: red;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Home = () => {

    return (
      <StyledHome >
        <h1>Home</h1>
        <ul>
          {[1, 2, 3, 4, 5].map((offre,index) => <li key={index}>offre {index}</li>)}
        </ul>
        
      
      </StyledHome>
    );
  
}

export default Home;