import styled from 'styled-components'

export const StyledButton = styled.button`
    cursor: pointer;
    padding: 0.5em 1.5em;
    font-family: sans-serif;
    font-size: 1.25em;
    border: solid 1px ${(props) => props.outline ? "lightblue" : "white"};
    background-color: ${(props) => props.outline ? "white" : "lightblue"};
    color: ${(props) => props.outline ? "lightblue" : "white"};
    width: ${(props) => props.fullWidth !== null ? "100%" : "auto"};
    &:hover {
        border: solid 1px ${(props) => props.outline ? "lightblue" : "cornflowerblue"};
        background-color: ${(props) => props.outline ? "lightblue" : "cornflowerblue"};
        color: white;
    }
`;