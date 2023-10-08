// E:\programming\Project\ph-predictor\frontend\src\components\common\Header.js

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" style={{ backgroundColor: 'white' }}>
      <LinkContainer to="/">
        <Navbar.Brand>人工知能によるフィリピン株価の未来予測</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-8"> {/* メニューの間に間隔を追加 */}
          <LinkContainer to="/">
            <Nav.Link>ホーム   |   </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/csvDownload">
            <Nav.Link>CSVダウンロード   |   </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;