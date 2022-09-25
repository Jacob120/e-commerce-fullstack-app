import Nav from 'react-bootstrap/Nav';
import styles from './TopBar.module.scss';
import { BsPerson, BsTelephone } from 'react-icons/bs';

const TopBar = () => {
  return (
    <Nav className={`justify-content-end ${styles.root}`} activeKey="/">
      <Nav.Item>
        <Nav.Link href="/" style={{ color: '#445f84' }}>
          <BsTelephone /> Call: +0123 456 789
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.test}>
        <Nav.Link style={{ color: '#445f84' }} href="/about" eventKey="link-1">
          About us
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{ color: '#445f84' }} eventKey="link-2">
          Contact us
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{ color: '#445f84' }} eventKey="disabled">
          <BsPerson /> Login
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default TopBar;
