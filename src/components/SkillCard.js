import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

export const SkillCard = ({skill}) => {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 10,
  },
  textSkill: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
