import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "./siginup.module.css"
import { RiContactsFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { IoLockClosedSharp } from "react-icons/io5";


function Signup({clickFunc}) {
  return (
    <div className={styles.main}>
 <div>
      <img src="https://e7.pngegg.com/pngimages/486/136/png-clipart-desktop-computers-study-tables-angle-child-thumbnail.png" alt="" />
    </div>

    <Form>
    <h1>Sign up</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> <RiContactsFill /></Form.Label>
        <Form.Control className={styles.input} type="email"  placeholder="Enter email" /><br/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><MdEmail /></Form.Label>
        <Form.Control className={styles.input} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><IoMdLock /></Form.Label>
        <Form.Control className={styles.input} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><IoLockClosedSharp /></Form.Label>
        <Form.Control className={styles.input} type="Comform Your password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Sign up
      </Button><br />
      <a href="#" onClick={clickFunc}>Create an account</a>
    </Form>
   
    </div>

  );
}

export default Signup;