// E:\programming\Project\ph-predictor\frontend\src\components\common\Footer.js

import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Footer() {
  const currentYear = new Date().getFullYear();  // 現在の年を取得

  return (
    <Navbar fixed="bottom" bg="dark" variant="dark" style={{ padding: '20px 0' }}> {/* 縦幅を広げるためのパディングを追加 */}
      <Container>
        <Navbar.Text>&copy; {currentYear} 人工知能によるフィリピン株価の未来予測. All rights reserved.</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Footer;