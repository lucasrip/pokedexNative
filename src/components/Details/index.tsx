
import {Circle, Container , Head, Image, PokeDetailItem, TypeImage, TextType,PokeDetailContainer , Text , PokeTypeContainer, StatsContainer} from './styles';
import {Foundation} from '@expo/vector-icons';
import uuid from 'react-native-uuid';
import theme from '../../theme/theme';
import { AuthContext } from '../../context/auth';

import { useContext, useState , useEffect} from 'react';

export function Details({route}:any)
{
   
   const { favoritesPokemons,setFavoritesPokemons}:any = useContext(AuthContext);
   const pokemon = route.params;
   const pokeId = pokemon.id ;
   const pokeName = pokemon.name;
   const pokeHeight = pokemon.height / 10 ;
   const pokeWeight = pokemon.weight / 10 ;

   console.log(pokemon);
   let pokeSpritUrl =  pokeId < 650 ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokeId}.gif`
   : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
   
   const findPokemonAssets = ( type:string) =>theme.find((item)=>item.type == type);
   const firstType = pokemon?.types[0]?.type?.name ;
   const typeColor = findPokemonAssets(firstType)?.color;
   const secondType = pokemon?.types[1]?.type?.name ;

   const firstIcon = findPokemonAssets(firstType)?.icon;
   const secondIcon =  findPokemonAssets(secondType)?.icon;
   const [isFavorited,setIsFavorited] = useState(false);

   const searchPokemon = favoritesPokemons != [] &&favoritesPokemons?.some((item:any)=> item?.id === pokemon.id) ;
   function removeFavoritePokemon()
   {
      setIsFavorited(false);
     return favoritesPokemons != [] &&favoritesPokemons?.filter((item:any)=>{
      if(item?.id != pokemon.id) return item
     } )
    }
  
    function saveFavoritePokemon()
   {  
     if(searchPokemon == false)  
     {
      setFavoritesPokemons((previous:any)=> [...previous , pokemon]);
      setIsFavorited(true);
     }
   }
    
  useEffect(()=>{

    if(searchPokemon === false )setIsFavorited(false);
    else setIsFavorited(true);
    
   },[pokemon])

   return(
    <Container>
      <Head pokeColor={typeColor}>
        <Circle pokeColor={typeColor}>
        <Image source={{uri: pokeSpritUrl}}  />
        </Circle>
        <PokeDetailContainer>   
               
                 { PokeDetail(pokeName,`#${pokeId}`)}
                 { PokeDetail('Altura',`${pokeHeight} M`)}
                 { PokeDetail('Peso',`${pokeWeight} Kg`)}
          <PokeTypeContainer>
             <TextType>
               <TypeImage source={firstIcon}/>
                <Text>
                 {firstType}
                </Text>
               </TextType>
             <TextType>
             <TypeImage source={secondIcon}/>
                <Text>
                 {secondType}
                </Text>
             </TextType>
          </PokeTypeContainer>
        
        </PokeDetailContainer>
      {
         isFavorited?<Foundation 
          name='heart'
          onPress={()=>setFavoritesPokemons(removeFavoritePokemon)}
          size={24} color="#ff0101" />
          :
         <Foundation name='heart' size={24} onPress={()=> saveFavoritePokemon()} color="#121212" />
      }
      </Head>
      <StatsContainer>
       <PokeDetailContainer>
         {
            pokemon?.stats.map((item:any) => PokeDetail(item.stat.name,item.base_stat,"100%","#000"))
         }
       </PokeDetailContainer>
      </StatsContainer>
    </Container>
   )
}


const PokeDetail = (firtItem:any,secondItem:any,width:string = '',color:string='') =>{
   
   return(
   <PokeDetailItem key={firtItem}>       
      <Text width={width} color={color}>
       {firtItem}
      </Text>
      <Text width={width} color={color}>
       {secondItem}
      </Text>
     </PokeDetailItem>
   )
} ;