import { StyleSheet, Text, View, Image } from 'react-native';

export default function Plato({ id, title, image }) {
    return (
        <View style={styles.container}>
            <Image
                source={{uri: image}}
                style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

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