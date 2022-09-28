import React, { useState ,useEffect } from "react";
import { FlatList } from "react-native";
import { Loading } from "../../components/Loading";
import PokeItem from "../../components/PokeItem";
import {fetchPokemon} from "../../service/pokeApi";
import uuid from 'react-native-uuid';
import { Picker } from "@react-native-picker/picker";
import { Container } from "./styles";
import regions from './regions';

interface Regions
{
  region :string,
  initialValue:number,
  maxValue:number,
}

export default function Home ({navigation}:any)
{ 
  
  const [selectedValue, setSelectedValue] = useState("Kanto");
  const [pokemonList,setPokemonList] = useState<any>([]);
  const [loading,setLoading] = useState(false);
  const [numberItems, setNumberItems] = useState(0);
  const [maxItems , setMaxItems] = useState(151);

  useEffect(()=>{ loadingApi() },[selectedValue])

async function loadingApi()
{ 
  let perRequest = 10 ;
 
  if(loading) return ;

  if(numberItems + perRequest < maxItems)
 {
  await fetchPokemon(numberItems,perRequest,setPokemonList); 
 
  setLoading(true);
  setNumberItems(previous => previous + perRequest); 
  setLoading(false);
  return
 }

  perRequest = maxItems - numberItems ;
  await fetchPokemon(numberItems,perRequest,setPokemonList); 
  setLoading(true);
}

 return ( 
  <Container>
    <Picker
      selectedValue={selectedValue}
      style={{ height: 50, width: 180 }}
      onValueChange={(itemValue:any, itemIndex:any) =>{
        const {region,initialValue,maxValue}:any = regions.find((item:Regions)=>item.region == itemValue);
        
        if(itemValue == selectedValue) return;
        setSelectedValue(itemValue);
        setPokemonList([]);
        setNumberItems(initialValue);
        setMaxItems(maxValue);
       
        setLoading(false);
      }}
      >
      { 
      regions.map((region , index) =><Picker.Item key={index} label={`${region.region}   #${region.maxValue}`} value={region.region} />)
      }
    </Picker>

   <FlatList
    contentContainerStyle={{marginHorizontal:10,marginVertical:-10,paddingBottom:20}}
    data={pokemonList}
    keyExtractor={()=> String(uuid.v4())}
    renderItem={({item})=> <PokeItem pokemon={item} navigation={navigation} />}
    onEndReached={()=>loadingApi()}
    onEndReachedThreshold={0.4}
    ListFooterComponent={<Loading load={loading} />}
   />
  </Container>)
}


