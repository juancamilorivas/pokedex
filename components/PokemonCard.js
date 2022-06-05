import { View, Text } from 'react-native'
import React from 'react'

export default function PokemonCard(props) {

    const { pokemon } = props
    console.log(props)

  return (
    <View>
      <Text>POKEMON INFO</Text>
    </View>
  )
}