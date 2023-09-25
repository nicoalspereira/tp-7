import { FlatList, StyleSheet, Text, View } from 'react-native';
import Plato from '../components/Plato'
import { useEffect, useRef, useState } from 'react'
import useFetch from '../hooks/useFetch';

const Home = () => {
    const [listaPlatos, setListaPlatos] = useState([])

    const [platosFiltrados, setPlatosFiltrados] = useState([])
    const [busqueda, setBusqueda] = useState('')

    useEffect(() => {
        const start = async () => {
            const platos = await useFetch(true)
            setListaPlatos(platos)
            setPlatosFiltrados(platos)
        }
        start()
    }, [])

    useEffect(() => { // filtrar platos
        if (!busqueda) return
        var nuevosPlatos = [...listaPlatos]
        nuevosPlatos = nuevosPlatos.filter(plato => (
            plato.titulo.toUpperCase().includes(busqueda.toUpperCase())
        ))
        setPlatosFiltrados(nuevosPlatos)
    }, [busqueda])

    return (
        <View>
            <Text>Home</Text>
            <FlatList
              data={platosFiltrados}
              renderItem={({ item }) => <Text>{item.title}</Text>}
              keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home

