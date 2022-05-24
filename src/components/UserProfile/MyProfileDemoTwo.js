import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { SceneMap } from 'react-native-tab-view';
import { HScrollView } from 'react-native-head-tab-view'
import { CollapsibleHeaderTabView } from 'react-native-tab-view-collapsible-header'

const FirstRoute = () => (
    <HScrollView index={0} style={{backgroundColor: '#ffffff'}}>
        <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
           <Text style={styles.first_text}>Hello! I am Aarianna and I am a product designer at one of the biggest non-profits in the USA. I am a passionate person, customer-obsessed, and enjoy always helping people design new products/
experiences for their customers!</Text>
        </View>
    </HScrollView>
);

const SecondRoute = () => (
    <HScrollView index={1} style={{backgroundColor:'blue'}}>
        <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
    </HScrollView>
);

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    return (
        <CollapsibleHeaderTabView
      
            //  tabbarHeight ={() => 400}
            renderScrollHeader={() => <View style={{ height: 200, backgroundColor: 'red' }} />}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            // renderTabBar
            onIndexChange={setIndex}
            initialLayout={initialLayout}
        />
    );
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});