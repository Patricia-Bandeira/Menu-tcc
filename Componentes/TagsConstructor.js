import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default class TagConstructor extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            preference: [],
            response: false,
        }
    }

    componentDidMount(){
        this.GET()
    }

    GET(){
        this.setState({response: true})
        fetch('https://backend-sestante.herokuapp.com/forum/list', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'},          
            })
            .then(response => response.json())
            .then(async responseJson => {
                const resposta = (JSON.stringify(responseJson))
                console.log([Array.isArray(responseJson) ? responseJson : 'não é um array'])
                this.setState({preference: responseJson})
            })
        this.setState({response: false})
    }

    render(){
        const type = "PRIMARY"
        {this.state.preference.map(preference => {
        return(
            <View key={preference.id} style={styles.materia_container}>
                <Text key={preference.id} style={styles.materia_text}>
                    {preference.name}
                </Text>
                <View style={styles.innerContainer}>
                    {preference['tags'].map(tags => [
                        <Pressable onPress={console.log('apertou!')} key={tags.id} style={[styles.tags_container, styles[`tags_container_${type}`]]}>
                            <Text key={tags.id} style={[styles.tags_text, styles[`tags_text_${type}`]]}>
                            {tags.name}
                            </Text>
                        </Pressable>
                    ])} 
                </View>
            </View>
        )
        })}
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        JustifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5%',
        marginRight: '5%',
    },
    titulo: {
        fontSize: 50,
        fontWeight: '600',
        color: '#D6D6D6', 
        marginVertical: 15
    },
    subtitulo: {
        fontSize: 25,
        fontWeight: '600',
        color: '#D6D6D6',
        marginBottom: 30, 
    },
    imagemContinuar: {
        alignSelf: 'flex-end',
    },
    botaoContinuar: {
        alignSelf: 'flex-end',
        top: -8,
    },
    materia_container: {
        backgroundColor: '#FFF',
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderRadius: 10,
        marginBottom: 15,
    },
    materia_text: {
        marginLeft: 3,
        fontSize: 20,
        fontWeight: '600',
    },
    innerContainer: {
        backgroundColor: '#000',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        borderColor: '#000',
        borderWidth: 5
    },
    tags_text: {
        fontWeight: '600',
        fontSize: 10
    },
    tags_text_PRIMARY: {
        color: '#000',
    },
    tags_text_SECONDARY: {
        color: '#fff',
    },
    tags_container: {
        paddingHorizontal: 10,
        paddingVertical: 2, 
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 57,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tags_container_PRIMARY: {
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 2,
    },
    tags_container_SECONDARY: {
        backgroundColor: '#000',
        borderColor: '#fff',
        borderWidth: 2,
    },
})