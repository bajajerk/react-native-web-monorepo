import React from 'react';
import { ServicesProvider } from './services';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { LoginPage } from './pages/LoginPage/LoginPage';
import ForumPage from './pages/ForumPage';

import { GlobalUserDataProvider } from './contexts';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
});

export const App: React.FC = () => {
  return (
    <GlobalUserDataProvider>
      <ServicesProvider>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            <LoginPage />
          </ScrollView>
        </SafeAreaView>
      </ServicesProvider>
    </GlobalUserDataProvider>
  );
};
