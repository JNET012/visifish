import React from 'react'
import styled from 'styled-components';

import Card from '../components/Card/Card';
import { Box } from '@mui/material';

const MainWrapper = styled.div`
  padding: 3px 8px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & h1 {
    display: inline;
    padding: 0;
    margin: 0;
  };

  & h2 {
    display: inline;
  };

  & h3 {
    display: inline;
  }

  & span {
    margin-left: 12px;
    padding: 4px;
    background-color: white;
  }
`

export default function Summary({data}) {
  if(!data) return;
  return (
    <MainWrapper>
      <Box>
        <Header>
          <h1>Ongrowers</h1>
          <h3>Trout run 1</h3>
        </Header>
        <Header>
          <div><h2>Day</h2><span>{data.day}</span></div>
          <div><h2>Lux</h2><span>{data.lux}</span></div>
        </Header>
      </Box>
      <Box>
        {data.items.map(item => <Card key={item.type} item={item}/>)}
      </Box>
    </MainWrapper>
  )
}
