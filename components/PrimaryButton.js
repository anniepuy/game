import { View, Text, Pressable, StyleSheet } from 'react-native';

// function PrimaryButton(props) {
//     return (
//         <View>
//             <Text>{props.children}</Text>
//         </View>
//     )
// }

//react functional component using destructuring to access the children
function PrimaryButton({children}) {
    const pressHandler = () => {
        console.log("press")
    }
    return (
        <Pressable onPress={pressHandler}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    )
}
export default PrimaryButton;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#72063c',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})