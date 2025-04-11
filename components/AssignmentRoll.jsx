import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const users = ['Saga', 'Ossi'];

const AssignmentRoll = () => {
  const [selected, setSelected] = useState(null);

  const rollTask = () => {
    const index = Math.floor(Math.random() * users.length);
    setSelected(users[index]);
    // TODO: Backend tallennus
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Arvo tehtävän tekijä" onPress={rollTask} />
      {selected && <Text>{selected} tekee tämän!</Text>}
    </View>
  );
};

export default AssignmentRoll;
