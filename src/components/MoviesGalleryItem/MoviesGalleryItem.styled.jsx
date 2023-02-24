import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  border: 1px solid black;
  overflow: hidden;
  border-radius: 4px;
  text-decoration:none;
`;
export const GalleryTitle = styled.h3`
  margin-left: 20px;
  color:grey;
  /* text-decoration:none; */
  text-align: center;
`;

export const GalleryImg = styled.img`
  width: 100%;
  object-fit: cover;
  transition: transform 300ms linear;

  &:hover {
    transform: scale(1.03);
  }
`;
