import React from 'react';
import Nav from 'react-bootstrap/Nav';


function nav() {
    return(
<Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">Home</Nav.Link>
  </Nav.Item>
  {/* <Nav.Item>
    <Nav.Link eventKey="./History/history">History</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="./Science/science">Science</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="./linearAlgebra/linearAlgebra">
      Linear Algebra
    </Nav.Link>
  </Nav.Item> */}
</Nav>
    )
}

export default nav;