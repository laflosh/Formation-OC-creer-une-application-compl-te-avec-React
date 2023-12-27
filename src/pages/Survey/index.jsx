import { Link, useParams } from "react-router-dom";

function Survey(){

    let {questionNumber} = useParams();
    let questionNumberInt = parseInt(questionNumber);
    let prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
    let nextQuestionNumber = questionNumberInt + 1;

    return(

        <div>

            <h1>Questionnaires 🧮</h1>
            
            <div>

                <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>

                {questionNumberInt <= 9 ? (

                <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>

                ) : ( <Link to="/results">Résultats</Link>

                )}

                <h2>Question {questionNumber}</h2>

            </div>

        </div>

    )

};

export default Survey;