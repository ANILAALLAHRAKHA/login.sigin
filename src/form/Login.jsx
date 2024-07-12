import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "./login.module.css"
import { RiContactsFill } from "react-icons/ri";
import { IoMdLock } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { SiYoutubemusic } from "react-icons/si";

function Login({clickFunc}) {
  return (
    <div className={styles.main}>
    <Form>
      <h1>Sign in</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>  <RiContactsFill /></Form.Label>
        <Form.Control className={styles.input} type="email" placeholder="Enter email" /><br/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><IoMdLock /></Form.Label>
        <Form.Control className={styles.input} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Sign in
      </Button><br />
      <a href="https://www.facebook.com/signup"><FaFacebookSquare /></a>
      <a href="https://twitter.com/login"><IoLogoTwitter /></a>
      <a  href="https://www.youtube.com/account"><SiYoutubemusic /></a>
      <br />
      <a href="#" onClick={clickFunc}>Create an account</a>

    </Form>
    <div>
      <img src="https://img.freepik.com/premium-vector/realistic-reading-desk-vector-illustration_1253202-6139.jpg" alt="" />
    </div>
    </div>
  );
}

export default Login;