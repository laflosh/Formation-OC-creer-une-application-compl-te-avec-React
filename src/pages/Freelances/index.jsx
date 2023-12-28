import { useEffect, useState } from 'react';
import styled from "styled-components";
import Card from '../../components/Card';
import { Loader } from '../../utils/style/Atoms';
import colors from '../../utils/style/colors';

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
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

    let [profilData, setProfilData] = useState([]);
    let [isLoading, setIsLoading] = useState(false);
    let [error, setError] = useState(null);

    useEffect(() => {
        async function fetchDataProfil(){
            setIsLoading(true)
            try{
                const response = await fetch(`http://localhost:8000/freelances`);
                const {freelancersList} = await response.json();
                //const payload = await response.json();
                //const freelancersList = payload['freelancersList'];

                console.log(response);
                console.log(freelancersList);
                setProfilData(freelancersList);
            }
            catch(error){
                console.log(error);
                setError(true);
            }
            finally{
                setIsLoading(false);
            }
        }

        fetchDataProfil();
    }, [])

    if (error){
        return <span>Oups il y a eu un problème</span>
    };

    return(

        <div>

            <PageTitle>
                Trouvez votre prestataire
            </PageTitle>

            <PageSubtitle>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>

            {isLoading ? (
                <LoaderWrapper>
                    <Loader/>
                </LoaderWrapper>
            ) : (
                    <CardsContainer>
                        
                        {profilData.map((profil) => (
                            <Card
                            key={profil.id}
                            label={profil.job}
                            picture={profil.picture}
                            title={profil.name}
                            />
                        ))}
                            
                    </CardsContainer>
                )}

        </div>

    )
    
};

export default Freelances;