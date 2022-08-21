import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

// import { Container } from './styles';

interface ISkillCardProps extends TouchableOpacityProps {
  skillName: string;
}

export const SkillCard = ({skillName, ...rest}: ISkillCardProps) => {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
      <Text style={styles.textSkill}>{skillName}</Text>
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
