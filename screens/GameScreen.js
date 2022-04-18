import { View, Text, StyleSheet } from 'react-native';
import Title from '../components/Title';
import Colors from '../constants/colors';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max-min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <View>
                <Text>Higher or Lower?</Text>
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
})