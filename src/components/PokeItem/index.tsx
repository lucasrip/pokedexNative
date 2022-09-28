import { Link } from '@react-navigation/native';
import { Circle, Container ,Image ,Text } from "./styles";
import theme from '../../theme/theme';

export default function PokeItem({pokemon,navigation}:any)
{
  const pokeSpritUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  const pokeType = pokemon?.types[0]?.type?.name ;
  const pokeTypeColor:any = theme?.find((item)=>item.type == pokeType)?.color;
 
  return (
  <Container pokeColor={pokeTypeColor} onPress={()=> navigation.navigate("Pokemon",pokemon)}>
   <Circle pokeColor={pokeTypeColor} >
    <Image source={{uri: pokeSpritUrl}} />
   </Circle>
   <Text>{pokemon.name}</Text>
   <Text>#{pokemon.id}</Text>
  </Container> 
  )
}