import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from './homeScreenStyles';
import GetJsonPlaceholderTodosUseCase from '../../core/domain/GetJsonPlaceholderTodosUseCase'

const LobbyScreen = () => {

    const [id, setId] = useState('');
    const [todos, setTodos] = useState({
        id: '',
        title: '',
    });
    async function onHandlePress(id) {
        await GetJsonPlaceholderTodosUseCase.invoke(id)
            .then(response => {
                setTodos(response)
                console.log(response)
            })
            .catch(error => console.log(error))
    };
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder={'enter here...'}
                onChangeText={text => setId(text)}
                value={id}
            />
            <TouchableOpacity onPress={()=> onHandlePress(id)}>
                <Text>{'Press Me'}</Text>
            </TouchableOpacity>

            <Text style={styles.idLabel}>{todos.id}</Text>
            <Text style={styles.titleLabel}>{todos.title}</Text>
        </View>
    );
}

export default LobbyScreen;