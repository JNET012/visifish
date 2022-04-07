import React from 'react'
import styled from 'styled-components';
import Navbar from '../NavBar/Navbar';

const LayoutWrapper = styled.div`
    width: 500px;
    min-height: 100vh;
    background: #f1f0f3;
    & main {
      margin-bottom: 50px;
    }
`

export default function Layout({children}) {
  return (
    <LayoutWrapper>
        <main>{children}</main>
        <Navbar/>
    </LayoutWrapper>
  )
}
