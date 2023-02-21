import React from "react";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../json/header-home.json";

const App = () => {
  const options = {
    id: 'animation',
    animationData: groovyWalkAnimation,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default App;
