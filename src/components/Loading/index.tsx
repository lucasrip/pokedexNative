import { LoadingContainer } from './styles';
import { ActivityIndicator } from "react-native";

interface Props
{
 load: boolean;
}

export function Loading({load}:Props)
{
  if(load) return null;
   return(
    <LoadingContainer>
      <ActivityIndicator size={25} color="#121212" />
    </LoadingContainer>
   )
}