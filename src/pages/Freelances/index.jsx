import DefaultPicture from '../../assets/profile.png'
import styled from "styled-components";
import Card from '../../components/Card';
 
const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
]

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`;

function Freelances(){

    return(

        <div>

            <h1>Freelances</h1>

            <CardsContainer>

                {freelanceProfiles.map((profil,index) =>
                    <Card
                    key={`${profil.name}-${index}`}
                    label={profil.jobTitle}
                    picture={profil.picture}
                    title={profil.name}
                    />
                )}
                
            </CardsContainer>

        </div>

    )
    
};

export default Freelances;