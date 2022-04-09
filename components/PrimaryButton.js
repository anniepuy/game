import { View, Text } from 'react-native';

// function PrimaryButton(props) {
//     return (
//         <View>
//             <Text>{props.children}</Text>
//         </View>
//     )
// }

//react functional component using destructuring to access the children
function PrimaryButton({children}) {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    )
}
export default PrimaryButton;