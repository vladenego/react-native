import * as React from 'react';
import {Text, View, Button, ImageBackground} from 'react-native';

import {BlurView} from '@react-native-community/blur';
import BottomSheet from 'reanimated-bottom-sheet';

import {styles} from './styles';

const App = () => {
  const renderContent = () => (
    <View style={styles.sheetContainer}>
      <BlurView
        style={styles.blur}
        blurType="dark"
        blurAmount={90}
        reducedTransparencyFallbackColor="white"
      />

      <View style={styles.sheetContent}>
        <View style={styles.separator}></View>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <ImageBackground
      style={{flex: 1}}
      source={{
        uri:
          'https://www.kolpaper.com/wp-content/uploads/2020/03/iphone-mountain-wallpaper.jpg',
      }}>
      <View style={styles.container}>
        <Button
          title="Open Bottom Sheet"
          color="white"
          onPress={() => sheetRef.current.snapTo(0)}
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[750, 350, 0]}
        borderRadius={20}
        renderContent={renderContent}
      />
    </ImageBackground>
  );
};

export default App;
