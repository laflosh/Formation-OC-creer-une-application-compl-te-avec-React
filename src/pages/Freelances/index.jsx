import DefaultPicture from '../../assets/profile.png'
import styled from "styled-components";
import Card from '../../components/Card';
import colors from '../../utils/style/colors';
 
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
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

function Freelances(){

    return(

        <div>

            <PageTitle>
                Trouvez votre prestataire
            </PageTitle>

            <PageSubtitle>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>

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