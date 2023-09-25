import { FlatList, StyleSheet, Text, View, RefreshControl } from 'react-native';
import Plato from '../components/Plato'
import { useEffect, useRef, useState } from 'react'
import useFetch from '../hooks/useFetch';
import Layout from '../components/Layout';

const Home = () => {
    const [listaPlatos, setListaPlatos] = useState([])

    const [refreshing, setRefreshing] = useState(false)
    const [platosFiltrados, setPlatosFiltrados] = useState([])
    const [busqueda, setBusqueda] = useState('')

    const buscarPlatos = async () => {
        setRefreshing(true)
        const platos = await useFetch(true)
        setRefreshing(false)
        setListaPlatos(platos)
        setPlatosFiltrados(platos)
    }

    useEffect(() => { buscarPlatos() }, [])

    useEffect(() => { // filtrar platos
        if (!busqueda) return
        var nuevosPlatos = [...listaPlatos]
        nuevosPlatos = nuevosPlatos.filter(plato => (
            plato.titulo.toUpperCase().includes(busqueda.toUpperCase())
        ))
        setPlatosFiltrados(nuevosPlatos)
    }, [busqueda])

    return (
        <Layout>
            <Text>Home</Text>
            <FlatList
                refreshControl={
                    <RefreshControl onRefresh={async () => await buscarPlatos()}
                        // colors={['lightcoral']}
                        progressBackgroundColor={'lightblue'}
                        refreshing={refreshing}
                    />
                }
                contentContainerStyle={styles.listaPlatos}
                data={platosFiltrados}
                renderItem={({ item }) => <Plato {...item} />}
                keyExtractor={item => item.id}
            />
        </Layout>
    )
}

const styles = StyleSheet.create({
    listaPlatos: {
        flex: 1,
        alignItems: 'center',
        gap: 20,
        width: '100%',
    }
})

export default Home

