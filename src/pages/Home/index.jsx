//import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import homePic from "../../assets/home-illustration.svg";

const StyledLink = styled(Link)`
  padding: 10px 60px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
   ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

const HomeWrapper = styled.div`
  height: 100%;
  background-color: ${colors.backgroundLight};
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 80px;
  padding: 120px;
  display: flex;
  flex-direction: raw;
`;
const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 15px;
  margin: 0 100px;
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`;

const HomeTitle = styled.h1`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`;

function Home() {

  return(

    <HomeWrapper>

      <HomeContainer>

      <LeftCol>

        <HomeTitle>
          Repérez vos besoins, 
          on s'occupe du reste, 
          avec les meilleurs talents
        </HomeTitle>

        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>

      </LeftCol>
        
      </HomeContainer>

      <img src={homePic} alt="illustration page d'acceuil"/>

    </HomeWrapper>

  )

};

export default Home;
