import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AdminPage = () => {
  return (
    <View style={styles.container}>
      <Text>Admin Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AdminPage;
