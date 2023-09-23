import { StyleSheet, Text, View } from 'react-native';
import Ejercicio from '../components/Card'
import { useEffect, useRef, useState } from 'react'
import data from '../Data/data';

const Home = () => {
    const [listaArticulos, setListaArticulos] = useState([])

    const [articulosActivos, setArticulosActivos] = useState([])
    const [tema, setTema] = useState(0)
    const [busqueda, setBusqueda] = useState(null)

    const buscarInput = useRef()

    useEffect(() => async() => {
        console.log(data)
        setListaArticulos(data)
        setArticulosActivos(data)
        setBusqueda('')
    }, [])

    useEffect(() => { // Filtrar
        var lista = [...listaArticulos]
        if (tema) lista = lista.filter(ej => ej.tema === tema)
        if (busqueda) {
            lista = lista.filter((ej) => (
                ej.titulo.toUpperCase().includes(buscarInput.current.value.toUpperCase())
            ))
        }
        setArticulosActivos(lista)
    }, [busqueda, tema])

    const handleClick = e => setTema(Number(e.target.value))
    const handleChange = e => setBusqueda(e.target.value)

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

