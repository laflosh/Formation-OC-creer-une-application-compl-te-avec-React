import { Link } from "react-router-dom";
import logo_dark from "../../assets/dark-logo.png"
import styled from "styled-components";
import colors from "../../utils/style/colors";

const StyledLink = styled(Link)`
    padding: 10px 30px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: raw;
    align-items:center;
    justify-content: space-between;
    & img{
        width: 200px;
        padding: 20px;
    }
`;

const HeaderNav = styled.nav`
    display:flex;
    gap: 5px;
    margin-right: 45px;
`;

function Header(){

    return(
        <HeaderContainer>

            <img src={logo_dark} alt="logo de l'agence Shiny"/>
            <HeaderNav>

                <StyledLink to="/">Acceuil</StyledLink>
                <StyledLink to="/freelances">Freelances</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>

            </HeaderNav>

        </HeaderContainer>
    )

};

export default Header;