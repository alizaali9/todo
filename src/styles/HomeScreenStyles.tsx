import { StyleSheet, Dimensions, Platform } from "react-native";
import { window } from "../constants/window";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
    safearea: {
        paddingHorizontal: 20,
        width: window.width,
        height: window.height,
        flexDirection: 'column',
        backgroundColor: colors.white
    },
    loadingContainer: {
        height: window.height * 0.79,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 30,
        fontWeight: "700",
        color: colors.black,
        fontFamily: 'Arial',
        paddingVertical: 10
    },
    addTask: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        width: window.width * 0.74,
        borderRadius: 5,
        borderColor: colors.grey,
        borderWidth: 2,
        paddingHorizontal: 10,
        fontFamily: 'Arial',
        fontSize: 15,
        fontWeight: "500",
        color: colors.black
    },
    addButton: {
        backgroundColor: colors.primary,
        width: window.width * 0.14,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
    },
    taskContainer: {
        backgroundColor: colors.grey,
        height: 50,
        justifyContent: "space-between",
        marginBottom: 10,
        flexDirection: "row",
        alignItems: 'center',
        paddingRight: 10,
    },
    taskText: {
        fontFamily: 'Arial',
        fontSize: 15,
        fontWeight: "500",
        color: colors.black,
        // paddingLeft: 15,
    },
    deleteContainer: {
        backgroundColor: colors.delete,
        height: 50,
        justifyContent: "center",
        width: window.width * 0.13,
        alignItems: 'center'
    },
    checkContainer: {
        backgroundColor: colors.check,
        height: 50,
        justifyContent: "center",
        width: window.width * 0.13,
        alignItems: 'center'
    },
    pendingTasksCon: {
        width: window.width,
        position: "absolute",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        bottom: 20,
        padding: 20

    },
    clearAll: {
        backgroundColor: colors.primary,
        width: window.width * 0.20,
        height: 35,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
    }
});

export default styles;