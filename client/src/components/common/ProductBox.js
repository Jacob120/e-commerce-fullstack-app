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
  onSale,
  oldPrice,
  topSale,
  outOfStock,
}) => {
  const activeStars = starsRating;

  return (
    <Card style={{ height: '100%' }} className={styles.card_wrapper}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Row>
          <Col className={'mb-3 ' + styles.label}>
            {onSale && (
              <span className={'mx-1 ' + styles.label_sale}>Sale</span>
            )}
            {topSale && <span className={'mx-1 ' + styles.label_top}>Top</span>}
            {outOfStock && (
              <span className={'mx-1 ' + styles.label_out}>Out of Stock</span>
            )}
          </Col>
        </Row>
        <p className={styles.categories_text}>
          {category}, {gender}
        </p>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="m-0">
          {oldPrice ? (
            <p>
              <span className={styles.new_price}>Now {price}</span>{' '}
              <span className={styles.old_price}>Was {oldPrice}</span>
            </p>
          ) : (
            <p>{price}</p>
          )}
        </Card.Text>
        <Row className="justify-content-center text-center pb-3">
          <Col xs={12}>
            {[...Array(5)].map((star, index) =>
              index < activeStars ? (
                <BsStarFill key={index} className={styles.stars_fill} />
              ) : (
                <BsStarFill key={index} className={styles.stars} />
              ),
            )}
            <p className={styles.categories_text}>(2 reviews)</p>
          </Col>
        </Row>

        {!outOfStock && (
          <Button variant="outline-secondary" size="sm" className="mx-1 mb-1">
            <BsCartPlus className="mx-1 " />
            ADD TO CART
          </Button>
        )}
        <Button variant="outline-secondary" size="sm" className="mx-1 mb-1">
          <BiGlassesAlt className="mx-1 " />
          VIEW DETAILS
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductBox;
