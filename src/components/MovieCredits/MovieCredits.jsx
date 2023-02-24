import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


import {API} from 'servises/API';
import {Loader} from 'components/Loader/Loader';

import { CreditsList, CreditsTitle, CreditsListItem } from "./MovieCredits.styled";

export const ActorsList = () => {
    const { movieId } = useParams();
  
    const [allActorsList, setAllActorsList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      async function fetchactors() {
        try {
          setIsLoading(true);
          const castList = await API.fetchActorsCredits(movieId);
          setAllActorsList(castList);
        } catch (error) {
        } 
        finally {setIsLoading(false);}
      }
      fetchactors();
    }, [movieId]);
  
    const createActorsList = () => {
      return allActorsList.filter(actor => actor.profile_path);
    };
  
    return (
      <div>
        {isLoading && <Loader />}
        {allActorsList.length > 0 && (
          <CreditsList>
            {createActorsList().map(({ id, profile_path, name }) => {
              return (
                <CreditsListItem key={id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                    width={350}
                  />
                  <CreditsTitle>{name}</CreditsTitle>
                </CreditsListItem>
              );
            })}
          </CreditsList>
        )}
      </div>
    );
  };
  
