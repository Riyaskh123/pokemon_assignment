import React from 'react';
import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";

const SearchInputContainer = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  padding: 10px 10px 10px 30px; 
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 300px;
  outline: none;
  box-sizing: border-box; 

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

const SearchComponent = ({...props}) => {
  return (
    <SearchInputContainer>
      <SearchInput type="text" placeholder="Search..." {...props} />
      <IconContainer>
        <FaSearch color='#777'/>
      </IconContainer>
    </SearchInputContainer>
  );
};

export default SearchComponent;
