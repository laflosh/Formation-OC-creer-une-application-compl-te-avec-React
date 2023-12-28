import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader } from "../../utils/style/Atoms";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`;

const QuestionContent = styled.span`
  margin: 30px;
`;

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;

function Survey(){

    let {questionNumber} = useParams();
    let questionNumberInt = parseInt(questionNumber);
    let prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
    let nextQuestionNumber = questionNumberInt + 1;
    let [surveyData, setSurveyData] = useState({});
    let [isDataLoading, setDataLoading] = useState(false);
    let [error, setError] = useState(null);

    //useEffect(() =>{
    //    setDataLoading(true)
    //    fetch(`http://localhost:8000/survey`)
    //      .then((response) => response.json()
    //      .then(({surveyData}) => {
    //        setSurveyData(surveyData)
    //        setDataLoading(false)
    //      })
    //      .catch((error) => console.log(error))
    //      )
    //}, []);

    useEffect(() => {
        async function fetchSurvey(){
            setDataLoading(true);
            try{
                const response = await fetch(`http://localhost:8000/survey`);
                console.log(response)
                const {surveyData} = await response.json();
                console.log(response)
                console.log(surveyData)
                setSurveyData(surveyData);
            }
            catch(err){
                console.log(err);
                setError(true);
            }
            finally{
                setDataLoading(false);
            }
        }

        fetchSurvey()

    }, []);

    if (error){
        return <span>Oups il y a eu un problème</span>
    };

    return (
        <SurveyContainer>
          <QuestionTitle>Question {questionNumber}</QuestionTitle>
          {isDataLoading ? (
            <Loader />
          ) : (
            <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
          )}
          <LinkWrapper>
            <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
            {surveyData[questionNumberInt + 1] ? (
              <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
            ) : (
              <Link to="/results">Résultats</Link>
            )}
          </LinkWrapper>
        </SurveyContainer>
      )
    };

export default Survey;