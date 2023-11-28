import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const Modulo3 = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://www.a24.com/tecnologia/delitos-informaticos-como-y-donde-realizar-una-denuncia-n995491' }}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
};

export default Modulo3;
