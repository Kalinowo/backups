import { View, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/colors";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    //↓android property for making box-shadow
    elevation: 10,
    //↓ios property for making box-shadow
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    //how much it spreads
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
