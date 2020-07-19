import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { LoginPage } from './pages/LoginPage';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
});

export const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <LoginPage />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
