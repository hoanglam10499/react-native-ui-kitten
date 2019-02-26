import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import {
  NavigationScreenProps,
  SafeAreaView,
} from 'react-navigation';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import {
  TopNavigationBar as TopNavigationBarComponent,
  TopNavigationBarAction,
} from '@kitten/ui';

type Props = & ThemedComponentProps & NavigationScreenProps;

const leftControlUri: string = 'https://akveo.github.io/eva-icons/fill/png/128/arrow-ios-back.png';
const rightControlUri1: string = 'https://akveo.github.io/eva-icons/fill/png/128/at.png';
const rightControlUri2: string = 'https://akveo.github.io/eva-icons/fill/png/128/flash.png';

class TopNavigationBar extends React.Component<Props> {

  static navigationOptions = {
    header: (props: NavigationScreenProps) => (
      <SafeAreaView style={styles.safeAreaView}>
        <TopNavigationBarComponent
          appearance='title-centered'
          title='Top Navigation Bar'
          subtitle='Subtitle'
          leftControl={
            <TopNavigationBarAction
              icon={(width: number, height: number, color: string) => (
                <Image
                  source={{ uri: leftControlUri }}
                  style={{
                    width: width,
                    height: height,
                    tintColor: color,
                  }}/>
              )}
              onPress={() => props.navigation.goBack(null)}
            />
          }
          rightControls={[
            <TopNavigationBarAction
              icon={(width: number, height: number, color: string) => (
                <Image
                  source={{ uri: rightControlUri1 }}
                  style={{
                    width: width,
                    height: height,
                    tintColor: color,
                    ...styles.icon,
                  }}/>
              )}
              onPress={() => Alert.alert('On first right action')}
            />,
            <TopNavigationBarAction
              icon={(width: number, height: number, color: string) => (
                <Image
                  source={{ uri: rightControlUri2 }}
                  style={{
                    width: width,
                    height: height,
                    tintColor: color,
                  }}/>
              )}
              onPress={() => Alert.alert('On second right action')}
            />,
          ]}
        />
      </SafeAreaView>
    ),
  };

  public render(): React.ReactNode {
    return (
      <View style={this.props.themedStyle.container}>
        <Text>Top Navigation Bar Demo</Text>
      </View>
    );
  }
}

export const TopNavigationBarScreen = withStyles(TopNavigationBar, (theme: ThemeType) => ({
  container: {
    padding: 22,
  },
}));

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#3366FF',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: 'red',
  },
});