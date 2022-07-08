import { Text, SafeAreaView, Button } from 'react-native'
import {getPokemonsFavoriteApi} from '../api/favorite'
//import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

export default function Favorite() {

const checkFavorite = async () => {
 const response = await getPokemonsFavoriteApi();
 console.log(response);
}

  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title='Obtener favoritos' onPress={checkFavorite}/>
    </SafeAreaView>
  )
}