import React from 'react';
import Nav from 'react-bootsrtap/nav';


function nav() {
<Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="./History/history">History</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="./Science/science">Science</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="./linearAlgebra/linearAlgebra" disabled>
      Linear Algebra
    </Nav.Link>
  </Nav.Item>
</Nav>
}

export default nav;