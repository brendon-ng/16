import React, { Component, useCallback, useEffect, useState } from "react";
import { Alert, View, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import { Card, Button } from "react-native-elements";
import colors from "../config/colors";
import ShoppingCart from "../components/ShoppingCart";

function ShoppingCartScreen(props) {
  const navigation = props.navigation;
  return (
    <SafeAreaView style={styles.container}>
      <ShoppingCart cart={global.cart}></ShoppingCart>
      <View style={styles.checkoutTab}>
            <Button
              type="solid"
              title="Checkout"
              titleStyle={styles.checkoutText}
              buttonStyle={styles.checkoutButton}
              onPress={() => {
                if (global.cart.length > 0) {
                  navigation.navigate("Checkout")
                } else {
                  Alert.alert(
                    "Can't checkout", 
                    "No items to check out!"
                  );
                }
              }}
            />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background
  },
  checkoutTab: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: "12%",
    position: "absolute",
    bottom: 0
  },
  checkoutButton: {
    borderRadius: 20,
    backgroundColor: colors.secondary,
  },
  checkoutText: {
    fontWeight: "bold",
    fontFamily: "Avenir"
  }
});

export default ShoppingCartScreen;