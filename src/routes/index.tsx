import React, { useContext} from "react";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { View, ActivityIndicator } from "react-native";
import { AuthContext } from "../contexts/AuthContext";


function Routes() {
    const {isAuthenticated, loading} = useContext(AuthContext);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fffaf2" }}>
                <ActivityIndicator size={60} color="#c66300" />
            </View>
        );
    }

    return (
            isAuthenticated ? <AppRoutes /> : <AuthRoutes />
    );
}

export default Routes;