import { Paper } from '@mui/material'
import React from 'react'
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ScaleIcon from '@mui/icons-material/Scale';
import StraightenIcon from '@mui/icons-material/Straighten';
import OpacityIcon from '@mui/icons-material/Opacity';
import VisibilityIcon from '@mui/icons-material/Visibility';

const colors = ['#6cc756', '#b9453c', '#81c2e1', '#c26eed', '#fd6735']

const CardWrapper = styled(Paper)`
  border-radius: 20%;
  width: 100%;
  margin: 5px 0px;
  padding: 8px;
  cursor: pointer;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-left: ${({index}) => index === 0 ? '' : '2px solid #b2b1b4'};
  padding-left: 8px;
`
const Label = styled.div`
  text-align:center;
  font-size: 14px;

`
const Value = styled.div`
  & span{
    font-size: 12px;
    color: #b2b1b4;
    margin-left: 3px;
    padding:5px ;

   }
`
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-weight: bold;
  
`
const Title = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  & h4 {
    color: ${colors[4]};
    margin: 0;
    padding: 0;
  }
`

const Date = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: #b2b1b4;
`

const ItemIcon = ({type}) => {
  switch (type) {
    case 10:
    case 40:
    case 50:
      return <FavoriteIcon sx={{fontSize: "18px", margin: '5px', color: 'red'}} />
    case 20:
      return <ScaleIcon sx={{fontSize: "18px", margin: '5px', color: '##3f3f3f'}} />
    case 30:
      return <StraightenIcon sx={{fontSize: "18px", margin: '5px', color: '##3f3f3f'}} />
    case 60:
      return <VisibilityIcon sx={{fontSize: "18px", margin: '5px', color: '#4c00fc'}} />
    case 70:
      return <OpacityIcon sx={{fontSize: "18px", margin: '5px', color: '#4c00fc'}} />
    default:
      return <FavoriteIcon sx={{fontSize: "18px", margin: '5px', color: 'red'}} />
  }
}

const LabelValue = ({label, value, unit, index}) => {
  return (<Wrapper index={index}>
    <Label style={{color: colors[index] }}>{label}</Label>
    <Value>{value}<span>{unit}</span></Value>
  </Wrapper>)
}

export default function Card({item}) {
  const navigate = useNavigate()
  return (
    <CardWrapper elevation={1} onClick={() => navigate(`/${item.type}`)}>
      <CardHeader>
        <Title><ItemIcon type={item.type}/><h4>{item.title}</h4></Title>
        <Date>Today<ArrowForwardIosIcon sx={{fontSize: "14px"}}/></Date>
      </CardHeader>
      <CardContent>
        {item.data.map(({label, value, unit}, idx) => <LabelValue key={label} label={label} value={value} unit={unit} index={idx} />)}
      </CardContent>
    </CardWrapper>
  )
}
