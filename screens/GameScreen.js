import { View, Text, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max-min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

//userNumber is accepted as props 
function GameScreen({userNumber}) {
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber );
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    //sets a limit that the human cannot lie and cause an infinite loop
    if (
        (direction === 'lower' && currentGuess < userNumber) ||
        (direction === 'greate' && currentGuess > userNumber) 
    ){
        Alert.alert("Don't lie! You know this is wrong!", [
            { text: 'Sorry!', style: 'cancel'},
        ]);
        return;
    }

    function nextGuessHandler(direction) {
        //lower or greater is direction value
        if (direction === 'lower') {
            maxBoundary  = currentGuess; 
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>
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