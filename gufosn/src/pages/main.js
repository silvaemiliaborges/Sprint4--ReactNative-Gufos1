import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class Main extends Component {

    constructor(){
        super();
        this.state = {
            eventos: [] //api
        };
    }

    componentDidMount() {
        this._carregarEventos();
    }

    _carregarEventos = async () => {
        // axios, fetch, xhr (XmlHttpRequest)
       await fetch('http://192.168.7.85:5000/api/eventos')
        .then(response => response.json())
        .then(data => this.setState({eventos: data}))
        .catch(erro => console.warn(erro));
    }

    render() {
        return (
            <FlatList 
                data={this.state.eventos}
                keyExtractor={item => item.idEventos}
                renderItem={ ({item}) => (
                    <View >
                    <Text style={styles.tabela}>{item.titulo}</Text>
                    <Text style={styles.tabela1}>{item.dataEvento}</Text>
                    </View>
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    tabela: {
        backgroundColor: Colors.dark,
        color: 'pink',

        // color:blue,
    },
    tabela1: {
        backgroundColor: Colors.black,
        color: 'white',
    },
});

    
export default Main;