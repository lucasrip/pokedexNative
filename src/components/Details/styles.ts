import styled from 'styled-components/native';

interface Props
{
  pokeColor: string ;
}

export const Container = styled.View`
display: flex ;
flex-direction: column ;
width:100%;
height:100% ;

`;

export const Head = styled.View`
width:100% ;
height:180px ;
position: relative ;
display:flex;
flex-direction: row ;
background-color:${({ pokeColor }:Props) => pokeColor} ;
padding-left: 10px ;
padding-top: 20px ;
`;

export const Circle = styled.View`
display: flex ;
justify-content: center ;
align-items: center ;
position:relative ;
width:124px ;
height:124px ;
padding:5px ;
background-color:#fff ;
border: 6px solid  ${({ pokeColor }:Props) => pokeColor} ;
border-radius: 80px;
`;

export const Image = styled.Image`
margin-top:10px ;
position:relative ;
width:90px ;
height:90px ;
object-fit: cover;
`;

export const TypeImage = styled.Image`
position:relative ;
width:36px ;
height:36px ;

`;

export const PokeDetailContainer = styled.View`
position:relative ;
width:180px ;
display: flex ;
flex-direction: column ;
`;

export const PokeDetailItem = styled.View`
margin-bottom: 4px ;
display: flex ;
flex-direction: row ;
`;

export const PokeTypeContainer = styled.View`
display: flex ;
flex-direction: row ;
margin-top: 10px ;
`;


export const Text = styled.Text`
width:${({width}:any)=> width?width:'100px'} ;
font-size:16px ;
color:${({color}:any)=> color?color:'#fff'} ; ;
font-weight:bold ;
font-style: normal ;
margin-bottom:3px ;
`;

export const TextType = styled.View`
height:50px ;
display:flex ;
flex-direction:column ;
font-size:16px ;
color:#fff ;
font-weight:bold ;
font-style: normal ;
margin-left:5px  ;
`;

export const StatsContainer = styled.View`
 width:100% ;
 display:flex ;
 justify-content: center ;
 align-items: center ;
 margin-top:25px ;
`;