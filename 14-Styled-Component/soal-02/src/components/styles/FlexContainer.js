import styled from 'styled-components'

const FlexContainer = styled.div`
    display: flex;
    height: 100vh;
    flex-wrap: wrap;
    flex-direction: ${(props) => props.direction != null ? props.direction : "row"};
    justify-content: ${(props) => props.justify != null ? props.justify : "center"};
    align-items: ${(props) => props.align != null ? props.align : "center"};
`;

export default FlexContainer;