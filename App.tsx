import React from 'react';
import AppNavigator from './src/routes/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): React.JSX.Element {
    return (
        <GestureHandlerRootView>
            <AppNavigator />
        </GestureHandlerRootView>
    );
}

export default App;
