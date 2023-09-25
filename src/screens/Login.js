import { StyleSheet, Text, View } from 'react-native'
import Layout from '../components/Layout';

const Login = () => {

    return (
        <Layout>
            <Text>LOGIN</Text>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Login

