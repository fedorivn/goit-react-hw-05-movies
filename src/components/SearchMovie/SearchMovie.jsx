import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


import {
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from 'components/SearchMovie/SearchMovie.styled';



export const SearchMovieForm = ({ onSearhFormSubmit }) => {
        const {
          register,
          handleSubmit,
          reset,
        } = useForm();
      
        const onFormSubmit = data => {
          if (data.search === '') {
            toast.warn('Please enter the name of the movie');
            return;
          }
          const normalizedData = {
            ...data,
            search: data.search.toLowerCase()
          }
          onSearhFormSubmit(normalizedData);
          reset();
        };
      
        return (
          <div>
            Film form
            {/* <SearchForm onSubmit={handleSubmit(onFormSubmit)}>
            <SearchFormBtnLabel>
              <SearchFormInput {...register('search')} />
              <SearchFormBtn type="submit">Search</SearchFormBtn>
              </SearchFormBtnLabel>
            </SearchForm> */}
          </div>
        );
      };


  