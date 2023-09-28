import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function Plato({ id, title, image, handlePress }) {
    
    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            {
                image ? <Image source={{uri: image}} style={styles.image} /> :
                <Image source={require('/assets/cargando.png')} style={styles.image} />
            }
            <Text style={styles.title}>{title || 'Cargando...'}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        margin:20,
        width:400,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 20,
        flexDirection: 'row',
        overflow: 'hidden', // Para que los bordes redondeados no muestren contenido fuera
    },
    image: { 
        width: '40%', 
        height: 150,
    },
    content: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green', // Puedes ajustar el color según sea necesario
    },
})