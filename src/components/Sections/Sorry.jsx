import { View, Image, StyleSheet, Text } from "react-native";

export default function Sorry(){

    return(
        <View style={styles.container}>
            <Image source={require('../../assets/bowing_icon.png')} style={{width: 400, height: 300, objectFit: 'fill'}}/>
            <Text style={styles.message}>Sorry! We are under maintenance.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
        height: 500,
        gap: 50,
    },
    message: {
        fontSize: 64,
    }
}
)