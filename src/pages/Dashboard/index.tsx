import React from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

export default function Dashboard() {

    const { signOut } = React.useContext(AuthContext);

    return (
        <View>
            <Text>Tela de Dashboard</Text>
            <Button title="Sair" onPress={signOut} />
        </View>
    );
}