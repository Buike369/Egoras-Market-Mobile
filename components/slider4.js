import React, {Component} from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

// import Preview from './src/Preview';
import FlatListSlider from './slider3';
// import {FlatListSlider} from 'react-native-flatlist-slider';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          image:require('../assets/apple.jpg'),
          desc: 'Silent Waters in the mountains in midst of Himilayas',
        },
        {
          image:
          require('../assets/apple1.jpg'),
          desc:
            'Red fort in India New Delhi is a magnificient masterpeiece of humans',
        },
        {
          image:   require('../assets/apple2.jpg'),
 
          desc:
            'Sample Description below the image for representation purpose only',
        },
        {
          image:require('../assets/apple3.jpg'),
        
          desc:
            'Sample Description below the image for representation purpose only',
        },
        {
          image:require('../assets/apple4.jpg'),
       
          desc:
            'Sample Description below the image for representation purpose only',
        },
      ],
    };
  }

  render() {
    const screenWidth = Math.round(Dimensions.get('window').width);
    return (
      <SafeAreaView>
        <ScrollView>
          <FlatListSlider
            data={this.state.data}
            timer={2000}
            imageKey={'image'}
            local={false}
            width={screenWidth}
            separator={0}
            loop={true}
            autoscroll={true}
            currentIndexCallback={index => console.log('Index', index)}
            onPress={item => alert(JSON.stringify(item))}
          
            animation
          />
          <View style={styles.separator} />
          <FlatListSlider
            data={this.state.data}
            width={275}
            timer={4000}
            component={<Preview />}
            onPress={item => alert(JSON.stringify(item))}
            indicatorActiveWidth={40}
            contentContainerStyle={styles.contentStyle}
          />
          <View style={styles.separator} />
          <FlatListSlider
            data={this.state.data}
            timer={5000}
            onPress={item => alert(JSON.stringify(item))}
            indicatorContainerStyle={{position:'absolute', bottom: 20}}
            indicatorActiveColor={'#8e44ad'}
            indicatorInActiveColor={'#ffffff'}
            indicatorActiveWidth={30}
            animation
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 20,
  },
  contentStyle: {
    paddingHorizontal: 16,
  },
});