import React, {useState} from 'react';
import {SafeAreaView, ScrollView, TextInput} from 'react-native';
import {
  GiphyContent,
  GiphyGridView,
  GiphyMedia,
  GiphyMediaType,
  GiphySDK,
  GiphyVideoView,
} from '@giphy/react-native-sdk';

// Configure API keys
GiphySDK.configure({apiKey: 'EPFk8I2Rw05nyFWUnEH6rOfrWJtjZv9C'});

const Test = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [media, setMedia] = useState(null);
  return (
    <SafeAreaView>
      <TextInput
        autoFocus
        onChangeText={setSearchQuery}
        placeholder="Search..."
        value={searchQuery}
      />
      <GiphyGridView
        content={
          searchQuery !== ''
            ? GiphyContent.search({
                searchQuery: searchQuery,
                mediaType: GiphyMediaType.Video,
              })
            : GiphyContent.trendingGifs()
        }
        cellPadding={3}
        style={{height: 300, marginTop: 24}}
        onMediaSelect={e => setMedia(e.nativeEvent.media)}
      />
      {media && (
        <ScrollView
          style={{
            aspectRatio: media.aspectRatio,
            maxHeight: 400,
            padding: 24,
            width: '100%',
          }}>
          <GiphyVideoView
            media={media}
            autoPlay={true}
            style={{aspectRatio: media.aspectRatio}}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Test;
