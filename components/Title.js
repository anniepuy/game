import { Text, StyleSheet } from 'react-native';

//uses descructuring to call the children to populate the actual text. the children is provided
//by the opening and closing tag of the component which <Title /> is used

function Title({children}) {
    <Text sytle={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 12
    }
})