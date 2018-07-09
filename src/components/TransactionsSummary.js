import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import ClickButton from './common/Button';

const TransactionsSummary = (props) => {
  return (
    <Card>
      <CardSection>
        <View>
          <Image style={styles.thumbnailHeight} source={{ uri: props.album.thumbnail_image }} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{props.album.title}</Text>
          <Text style={{ fontStyle: 'italic' }}>{props.album.artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <View>
          <Image style={styles.artwork} source={{ uri: props.album.image }} />
        </View>
      </CardSection>

      <CardSection>
          <ClickButton oC={() => Linking.openURL(props.album.url)}>
            Buy {props.album.title}
          </ClickButton>
      </CardSection>

    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 5
  },
  thumbnailHeight: {
    width: 50,
    height: 50
  },
  artwork: {
    width: 350,
    height: 350
  }
};

export default TransactionsSummary;
