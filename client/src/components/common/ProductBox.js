import styles from './ProductBox.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsCartPlus, BsStarFill, BsStar } from 'react-icons/bs';
import { BiGlassesAlt } from 'react-icons/bi';
const ProductBox = ({
  id,
  gender,
  name,
  category,
  price,
  image,
  starsRating,
}) => {
  const activeStars = starsRating;

  return (
    <Card style={{ width: '20rem' }} className={styles.card_wrapper}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <p className={styles.categories_text}>
          {category}, {gender}
        </p>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="m-0">{price}</Card.Text>
        <Row className="justify-content-center text-center py-3">
          <Col xs={12}>
            {[...Array(5)].map((star, index) =>
              index < activeStars ? (
                <BsStarFill key={index} className={styles.stars_fill} />
              ) : (
                <BsStarFill className={styles.stars} />
              ),
            )}
            <p className={styles.categories_text}>(2 reviews)</p>
          </Col>
        </Row>

        <Button variant="outline-secondary" size="sm" className="mx-1">
          <BsCartPlus className="mx-1" />
          ADD TO CART
        </Button>
        <Button variant="outline-secondary" size="sm" className="mx-1">
          <BiGlassesAlt className="mx-1" />
          QUICK VIEW
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductBox;
