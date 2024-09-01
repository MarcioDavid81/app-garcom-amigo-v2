import React from "react";
import { Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";
import { StyleSheet } from "react-native";
import { Image } from "react-native";

export default function Dashboard() {

    const { signOut } = React.useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../../assets/logo.png")} />
            <Text
            style={styles.title}
            >
                Novo Pedido
            </Text>
            <TextInput 
                placeholder="Mesa"
                placeholderTextColor={"#c663003a"}
                style={styles.input}
                keyboardType="numeric"
            />
            <TextInput 
                placeholder="Cliente"
                placeholderTextColor={"#c663003a"}
                style={styles.input}
            />
            <TouchableOpacity style={styles.touchable}>
                <Text style={styles.tochableText}>Abrir Mesa</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signOut} onPress={signOut}>
                <Text style={styles.signOutText}>Sair</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
        backgroundColor: "#fffaf2"
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#292827",
        marginVertical: 24,
    },
    input:{
        backgroundColor: "#fff",
        width: "90%",
        height: 50,
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#c66300",
        marginBottom: 10,
        fontSize: 22,
        textAlign: "center"
    },
    touchable: {
        backgroundColor: "#c66300",
        width: "90%",
        height: 50,
        padding: 10,
        borderRadius: 8,
        marginVertical: 12,
        justifyContent: "center",
        alignItems: "center"
    },
    tochableText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18
    },
    signOut: {
        backgroundColor: "#c66300",
        width: 50,
        height: 50,
        padding: 10,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20,
    },
    signOutText: {
        color: "#fff",
        fontSize: 18
    }

});