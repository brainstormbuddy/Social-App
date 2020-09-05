import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import data from '../../data/mock.json';

import Tag from '../../components/Tag';
import Comment from '../../components/Comment';

import { window, wsize, hsize } from '../../entities/constants';
import { Entypo, Feather, AntDesign } from '@expo/vector-icons';

const Post = ({ item }) => {
  const iconSize = wsize(28);
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeaderContainer}>
        <TouchableOpacity style={styles.postHeaderFirst}>
          <Image
            source={{
              uri: item.img,
            }}
            style={styles.postHeaderIcon}
          />
          <Text style={styles.postHeaderProfileName}>{item.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.postHeaderSecond}>
          <Entypo
            name="dots-three-horizontal"
            size={wsize(24)}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.postImageContainer}>
        <Image
          source={{
            uri: item.img,
          }}
          style={styles.postImage}
        />
      </View>
      <View style={styles.postActionsContainer}>
        <View style={styles.postActionsLeft}>
          <TouchableOpacity>
            <AntDesign
              name="hearto"
              size={iconSize}
              color="black"
              style={styles.postActionIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather
              name="message-circle"
              size={iconSize}
              color="black"
              style={styles.postActionIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo
              name="direction"
              size={iconSize}
              color="black"
              style={styles.postActionIcon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Feather
            name="bookmark"
            size={iconSize}
            color="black"
            style={styles.postActionIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.likesContainer}>
        <Text style={styles.likesText}>
          Liked by nee and 115 321 others
         </Text>
      </View>
      <View style={styles.postInfoContainer}>
        <Text style={styles.profileName}>sjohansson</Text>
        <Tag title="bucket hat" />
        <Tag title="white sneakers" />
        <Tag title="effortless" />
        <Tag title="sik sok" />
        <Comment
          profileName="sassyfairy"
          comment="This is me hahahaha! I need to get a white hat like that tho"
        />
      </View>
    </View>
  )
}

const HomeScreen = ({ }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Post item={item} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  postContainer: {
    marginHorizontal: wsize(12),
    marginBottom: hsize(30),
  },
  postHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: hsize(11),
  },
  postHeaderFirst: {
    flexDirection: 'row',
  },
  postHeaderSecond: {
    marginRight: wsize(2),
  },
  postHeaderProfileName: {
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: wsize(14),
    marginLeft: wsize(9),
    color: '#262626',
  },
  postHeaderIcon: {
    width: wsize(34),
    height: wsize(34),
    borderRadius: wsize(17),
  },
  postImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hsize(41),
  },
  postImage: {
    width: wsize(349),
    height: hsize(340),
  },
  postActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hsize(13),
  },
  postActionsLeft: {
    flexDirection: 'row',
    marginLeft: wsize(10),
  },
  postActionIcon: {
    marginRight: wsize(10),
  },
  likesContainer: {
    paddingHorizontal: wsize(4),
    marginBottom: hsize(11),
  },
  likesText: {},
  postInfoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: wsize(2),
  },
  profileName: {
    color: '#0148FF',
    fontWeight: 'bold',
  },
});
export default HomeScreen;
