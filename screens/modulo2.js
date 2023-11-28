import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const Modulo2 = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://www.abc.es/tecnologia/internet/ciberseguridad/' }}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
};

export default Modulo2;
