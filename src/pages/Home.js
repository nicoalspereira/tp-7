import { StyleSheet, Text, View } from 'react-native';
import { Container, Row, Col, Form, InputGroup, Button, ButtonGroup } from 'react-bootstrap'
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
        <>
            <Container fluid className='app-container'>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={9}>
                        <br/>
                        <InputGroup className="mb-3">
                            <Form.Control placeholder="Buscar..."
                                value={busqueda}
                                onChange={handleChange}
                                ref={buscarInput} />
                            <Button variant="secondary"><i className="bi bi-search"></i></Button>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3} className='dificultades-container'>
                        <h4>Problemas</h4>
                        <Button variant="primary" value={0} onClick={handleClick} className='dificulty-button'>Reset</Button>
                        <ButtonGroup aria-label="Basic example" className='dificulty-button'>
                            <Button variant="success" value={1} onClick={handleClick}>Calentamiento</Button>
                            <Button variant="warning" value={2} onClick={handleClick}>Contaminacion</Button>
                            <Button variant="danger" value={3} onClick={handleClick}>inundaciones</Button>
                        </ButtonGroup>
                    </Col>
                    <Col sm={9} className='ejercicios-container'>
                        {articulosActivos.map((ej, key) => (
                            <Ejercicio key={key} idEj={ej.id} titulo={ej.titulo} descripcion={ej.descripcion} tema={ej.tema} />
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
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

