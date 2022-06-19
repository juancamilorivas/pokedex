import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Favorite(props) {
  const addFavorite = () => {
const {id} = props;

    console.log("Agregar a favoritos", id);
  };

  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
