import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Search = styled.div`
  display: flex;
  max-width: 40rem;
  width: 100%;
  margin: 0 auto;
`;

const SearchBar = styled.input`
  font-size: 32px;
  color: #ffe500;
  width: 100%;
  background-color: #222222;
  border: none;
  padding: 24px 24px;
  display: inline-block;
`;

export const SearchButton = styled.button`
  font-weight: 900;
  font-size: 2rem;
  background: #ffe500;
  border: none;
  outline: none;
  color: #101010;
  max-width: 15rem;
  padding: 0px 24px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    filter: brightness(5);
  }
  &:active {
    filter: brightness(5);
  }
`;

const Filter = () => {
  return (
    <Container>
      <Search>
        <SearchButton>SEARCH</SearchButton>
        <SearchBar />
      </Search>
    </Container>
  );
};

export default Filter;
