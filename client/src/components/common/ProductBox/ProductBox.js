import styles from './ProductBox.module.scss';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsCartPlus } from 'react-icons/bs';
import { BiGlassesAlt } from 'react-icons/bi';
import StarsRating from '../StarsRating/StarsRating';

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
  return (
    <Card style={{ height: '100%' }} className={styles.card_wrapper}>
      <Card.Img variant="top" src={image} className={styles.image} />
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
            <span>
              <span className={styles.new_price}>Now {price}</span>{' '}
              <span className={styles.old_price}>Was {oldPrice}</span>
            </span>
          ) : (
            <span>{price}</span>
          )}
        </Card.Text>
        <div className="d-flex justify-content-center">
          <StarsRating stars={starsRating} />
        </div>

        {!outOfStock && (
          <Button variant="outline-secondary" size="sm" className="mx-1 mb-1">
            <BsCartPlus className="mx-1 " />
            ADD TO CART
          </Button>
        )}
        <Link to={'/product/' + id}>
          <Button variant="outline-secondary" size="sm" className="mx-1 mb-1">
            <BiGlassesAlt className="mx-1 " />
            VIEW DETAILS
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductBox;
