import { CardContainer, CardImage, CardBody, CardPrice, CardProductName } from './styles/Card';

import Button from './Button';

const Card = (props) => {
  return (
    <CardContainer width="400px">
      <CardImage src={props.product.imageUrl}/>
      <CardBody>
        <CardPrice>{props.product.price}</CardPrice>
        <CardProductName>{props.product.productName}</CardProductName>
        <Button />
      </CardBody>
    </CardContainer>
  );
}
export default Card;
