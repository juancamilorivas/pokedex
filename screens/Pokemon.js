import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
//import { SafeAreaView } from 'react-native-safe-area-context';
//import { SafeAreaView } from "react-native";
import { getPokemonDetailsApi } from "../api/pokemon";
import { Header } from "../components/Pokemon/Header";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);
  console.log(params.id);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        console.log(response);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <View>
      <Text>Estamos en un Pokemon</Text>
      <Text>{pokemon.name}</Text>
    </View>
  );
}
