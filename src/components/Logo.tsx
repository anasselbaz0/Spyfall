import React from 'react';
import { Text } from "react-native";
import colors from "../colors/colors";

const Logo = () => {
  const logoStyle = {
    color: colors.main,
    fontSize: 50,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: "center"
  };

  return (
    // @ts-ignore
    <Text style={logoStyle}>Spyfall</Text>
  );
};

export default Logo;