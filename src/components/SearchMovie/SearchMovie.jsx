import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import {
  SearchForm,
  // SearchFormBtn,
  // SearchFormBtnLabel,
  // SearchFormInput,
} from 'components/SearchMovie/SearchMovie.styled';

export const SearchMovieForm = ({ onSearhFormSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const onFormSubmit = data => {
    if (data.search === '') {
      toast.warn('Please enter the name of the movie');
      return;
    }
    const normalizedData = {
      ...data,
      search: data.search.toLowerCase(),
    };
    onSearhFormSubmit(normalizedData);
    reset();
  };

  return (
    <div style={{ marginTop:'40px', justifyContent:'center', margin:'0 auto',width:'400px', display:'flex', padding: 40 }}>
      <SearchForm onSubmit={handleSubmit(onFormSubmit)}>
        <input  {...register('search')}  />

        <input type="submit"/>
      </SearchForm>
    </div>
    /* <SearchForm onSubmit={handleSubmit(onFormSubmit)}>
            <SearchFormBtnLabel>
              <SearchFormInput {...register('search')} />
              <SearchFormBtn type="submit">Search</SearchFormBtn>
              </SearchFormBtnLabel>
            </SearchForm> */
  );
};
