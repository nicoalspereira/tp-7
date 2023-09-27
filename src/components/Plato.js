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
// Cargando
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8aafeb',
        borderRadius: 10,
        borderColor: '#6596e6',
        borderWidth: 2,
        gap: 10,
        width: 350,
        flexDirection: 'row',
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
    },
    image: { 
        width: '33%', 
        height: 100,
        borderRadius: 10,
    }
})