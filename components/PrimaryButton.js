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
        <View style={styles.buttonOuterContainer}>
            <Pressable style={styles.buttonInnerContainer} onPress={pressHandler} android_ripple={{color: '#640233'}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}
export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})