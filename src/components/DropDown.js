import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
`;

const StyledOptions = styled.div`
  display: ${props => props.open ? "block" : "none"};
  position: absolute;
  background-color: white;
  border: 2px solid rgba(75, 85, 99, 1);
  border-bottom: 0px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  top: 40px;
  &::before {
    content: '';
    position: absolute;
    width: 0; 
    height: 0; 
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgba(75, 85, 99, 1);
    top: -11px;
  }
`;

const StylesOption = styled.div`
  border-bottom: 2px solid rgba(75, 85, 99, 1);
  cursor: pointer;
  padding: 2px 5px;
`;

const StyledButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;


const DropDown = ({
  value,
  options
}) => {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    function outsideClickHandler(e) {
      if (document.getElementById('clickbox').contains(e.target)) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    }

    window.addEventListener('click', outsideClickHandler);

    return () => window.removeEventListener('click', outsideClickHandler);
  }, [])

  const handleLabelClick = (event) => {
    event.stopPropagation()
    setOpen(open => !open);
  }

  const filterValidValue = () => {
    let result = options[0]
    if(options.includes(value)){
      result = value;
    }
    return result;
  }

  const filterLabel = filterValidValue();

  return (
    <Container>
      <StyledButton onClick={handleLabelClick}>{filterLabel}</StyledButton>
      <StyledOptions id="clickbox" open={open}>
        {options.map(option => (
          <StylesOption key={option}>{option}</StylesOption>
        ))}
      </StyledOptions>
    </Container>
  )
}

DropDown.defaultProps = {
  value: "This is an example option",
  options: ["This is an example option", "To edit me pass an array in options prop"]
}

export default DropDown
