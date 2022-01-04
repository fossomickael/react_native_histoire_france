import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { getAllCategories } from "../actions/categories";
import { useDispatch } from "react-redux";

const CategoryScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  if (!categories) {
    return <Text>Chargement</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Choisir une catégorie</Text>
      {categories.map((category) => {
        return (
          <TouchableOpacity
            key={category.id}
            style={styles.jouer}
            onPress={() =>
              navigation.navigate("Question", { category_id: category.id })
            }
          >
            <Text style={styles.button}>{category.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 20,
    alignItems: "center",
  },
  jouer: {
    borderRadius: 3,
    alignItems: "center",
    backgroundColor: "#3282B8",
    padding: 10,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 200,
  },
  button: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  titre: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
export default CategoryScreen;
