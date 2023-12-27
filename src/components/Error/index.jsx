import styled from "styled-components";
import colors from "../../utils/style/colors";
import errorPic from "../../assets/404.svg";

const ErrorWrapper = styled.div`
    background-color: ${colors.backgroundLight};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    margin: 0 40px;
    margin-top: 40px;
    padding: 30px 0;
`;

const ErrorText = styled.p`
    font-size: 1.8em;
    font-weight: 600;
`;

function Error(){

    return(

        <ErrorWrapper>

            <ErrorText>
                Oups...
            </ErrorText>

            <img src={errorPic} alt="erreur 404"/>

            <ErrorText>
                Il semblerait qu'il y ait un problème
            </ErrorText>

        </ErrorWrapper>
    )

};

export default Error;