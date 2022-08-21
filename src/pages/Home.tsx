import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

// import { Container } from './styles';]

export interface ISkillsProps {
  id: string;
  name: string;
}

export const Home = () => {
  const [newSkill, setNewSkill] = useState<string>('');
  const [skills, setSkills] = useState<ISkillsProps[]>([]);
  const [greeting, setGreeting] = useState<string>('');

  const handleAddNewSkill = () => {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setSkills(oldState => [...oldState, data]);
    setNewSkill('');
  };

  const handleRemoveSkill = (id: string) => {
    setSkills(oldState => oldState.filter(skill => skill.id !== id));
  };

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good night');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Gabriel</Text>
      <Text style={[styles.greeting]}>{greeting}</Text>

      <TextInput
        placeholder="New skill"
        style={styles.input}
        placeholderTextColor="#555"
        value={newSkill}
        onChangeText={text => setNewSkill(text)}
      />
      <Button
        text="Add"
        background="#a370f7"
        textColor="#ffffff"
        onPress={handleAddNewSkill}
      />
      <Text style={[styles.title, {marginVertical: 30}]}>My Skills</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={skills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard
            skillName={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#ffffff',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
  greeting: {
    color: '#ffffff',
  },
});
