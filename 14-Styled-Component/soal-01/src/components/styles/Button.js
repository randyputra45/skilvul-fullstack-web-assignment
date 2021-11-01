import styled from 'styled-components'

export const StyledButton = styled.button`
    cursor: pointer;
    padding: 0.5em 1.5em;
    font-family: sans-serif;
    font-size: 1.25em;
    border: solid 1px ${(props) => (props.outline == null || props.outline == false) ? "white" : "lightblue"};
    background-color: ${(props) => (props.outline == null || props.outline == false) ? "lightblue" : "white"};
    color: ${(props) => (props.outline == null || props.outline == false) ? "white" : "lightblue"};
    width: ${(props) => (props.fullWidth !== null ? "100%" : "auto")};
    &:hover {
        border: solid 1px ${(props) => (props.outline == null || props.outline == false) ? "cornflowerblue" : "lightblue"};
        background-color: ${(props) => (props.outline == null || props.outline == false) ? "cornflowerblue" : "lightblue"};
        color: white;
    }
`;