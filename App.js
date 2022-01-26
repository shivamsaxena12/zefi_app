import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import AppNavigator from './src/navigation';
import configureMagicInstance from './src/utilities/configureMagic';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persistantStore} from './src/store';

const {store, persistor} = persistantStore;

configureMagicInstance.initialize();
const magic = configureMagicInstance.getMagicInstance();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={styles.container}>
          <magic.Relayer />
          <AppNavigator />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
