import { Text, StyleSheet } from 'react-native';

//uses descructuring to call the children to populate the actual text. the children is provided
//by the opening and closing tag of the component which <Title /> is used

function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 40,
    }
})