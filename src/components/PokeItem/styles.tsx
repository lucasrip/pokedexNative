import styled from 'styled-components/native';

interface Props
{
  pokeColor: string ;
}


export const Container = styled.Pressable`
position:relative ;
width:100%;
height: 90px ;
margin-top:30px ;
margin-left:25px ;
background-color: ${({ pokeColor }:Props) => pokeColor} ;
display:flex ;
flex-direction: row ;
align-items: center ;
`;

export const Image = styled.Image`
position:relative ;
width:95px ;
height:100px ;
`;

export const Circle = styled.View`
position:relative ;
left:-22px;
display:flex ;
justify-content: center ;
align-items: center ;
width:115px ;
height:110px ;
background-color:#fff ;
border: 6px solid  ${({ pokeColor }:Props) => pokeColor} ;
border-radius: 150px;
`;

export const Text = styled.Text`
width:100px ;
font-size:16px ;
color:#fff ;
font-weight:bold ;
font-style: noemal ;
margin-left:15px  ;
`;