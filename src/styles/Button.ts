import styled from 'styled-components';

export const ButtonStyle = styled.button`
  background-color: #5585b5;
  color: #ffffff;
  cursor: pointer;
  padding: 5px 10px;
  border: none;
  border-top: 2px solid #79c2d0;
  border-bottom: 2px solid #79c2d0;
  border-radius: 5px;
  transition: all 0.3s ease;
  z-index: 99;
  font-size: 1rem;

  &.light {
  background-color: #ffffff;
  color: #9d2214;
  border-top: 2px solid rgb(181, 86, 86);
  border-bottom: 2px solid rgb(181, 86, 86);
}

  &:hover {
    background-color: #F3AD61;
  }

  .light &:hover {
    background-color: #ffffff;
    color: rgb(235, 196, 196);
    border: 2px solid rgb(235, 196, 196);
  }

  @media screen and (max-width: 786px) {
    padding: 5px 8px;
    border: 1px solid #79c2d0;
    font-size: 0.7rem;
  }
`;

