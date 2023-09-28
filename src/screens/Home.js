import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, RefreshControl, TextInput, Dimensions } from 'react-native'; // Importa Dimensions
import Plato from '../components/Plato';
import useFetch from '../hooks/useFetch';
import Layout from '../components/Layout';

const Home = ({ navigation }) => {
    const [listaPlatos, setListaPlatos] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [platosFiltrados, setPlatosFiltrados] = useState([]);
    const [busqueda, setBusqueda] = useState('');

    const buscarPlatos = async () => {
        setRefreshing(true);
        const platos = await useFetch(true);
        setRefreshing(false);
        setListaPlatos(platos);
        setPlatosFiltrados(platos);
    };

    useEffect(() => {
        buscarPlatos();
    }, []);

    useEffect(() => {
        if (!busqueda) return;
        const nuevosPlatos = [...listaPlatos];
        const platosFiltrados = nuevosPlatos.filter((plato) =>
            plato.title.toUpperCase().includes(busqueda.toUpperCase())
        );
        setPlatosFiltrados(platosFiltrados);
    }, [busqueda]);

    const handleChange = (newBusqueda) => setBusqueda(newBusqueda);

    const handlePress = (idPlato) => {
        navigation.navigate('Plato', { idPlato });
    };

    // Establece el número de columnas a 1 para una sola columna
    const numColumns = 1;

    return (
        <Layout style={styles.fondo}>
            
            <Text style={styles.headerText}>Carta de Comidas</Text>
            <TextInput
                placeholder='Buscar plato...'
                style={styles.textInput}
                onChangeText={handleChange}
                value={busqueda}
            />
            <FlatList
                refreshControl={
                    <RefreshControl
                        onRefresh={async () => await buscarPlatos()}
                        progressBackgroundColor='lightblue'
                        refreshing={refreshing}
                    />
                }
                contentContainerStyle={styles.listaPlatos}
                data={platosFiltrados}
                renderItem={({ item }) => (
                    <Plato {...item} handlePress={() => handlePress(item.id)} />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={numColumns} // Establece el número de columnas a 1
            />
        </Layout>
    );
};

const styles = StyleSheet.create({
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    listaPlatos: {
        paddingHorizontal: 10,
        marginTop: 20,
        
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
});

export default Home;
