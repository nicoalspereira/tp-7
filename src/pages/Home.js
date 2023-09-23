import { StyleSheet, Text, View } from 'react-native';
import Plato from '../components/Plato'
import { useEffect, useRef, useState } from 'react'
import data from '../mocks/data';

const Home = () => {
    const [listaPlatos, setListaPlatos] = useState([])

    const [platosFiltrados, setPlatosFiltrados] = useState([])
    const [busqueda, setBusqueda] = useState('')

    const buscarInput = useRef()

    useEffect(() => {
        const start = async() => {
            setListaPlatos(data)
            setPlatosFiltrados(data)
        }
        start()
    }, [])

    useEffect(() => { // Filtrar
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

