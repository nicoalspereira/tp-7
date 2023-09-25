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
        flex: 1,
        backgroundColor: '#8aafeb',
        borderRadius: 10,
        borderColor: '#6596e6',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
    },
    image: { 
        width: 200, 
        height: 200 
    }
})