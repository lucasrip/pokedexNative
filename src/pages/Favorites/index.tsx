import { FlatList} from "react-native";
import React, { useContext } from "react";
import { AuthContext } from '../../context/auth';
import { Container, Text } from "./styles";
import uuid from 'react-native-uuid';
import PokeItem from "../../components/PokeItem";


export default function Favoritos({navigation}:any)
{
 const { favoritesPokemons}:any = useContext(AuthContext);
 
 return (
 <Container>  
{
  favoritesPokemons != []?
  <FlatList
  contentContainerStyle={{marginHorizontal:10,marginVertical:-10,paddingBottom:20}}
  data={favoritesPokemons}
  keyExtractor={()=> String(uuid.v4())}
  renderItem={({item})=> <PokeItem pokemon={item} navigation={navigation} />}
 />
 :
 <Text>
  não ha nenhum pokemon favoritado
 </Text>
}
 </Container>)
}