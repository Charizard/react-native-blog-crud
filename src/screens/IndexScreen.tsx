import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../contexts/BlogContext';
import { FontAwesome, Feather } from '@expo/vector-icons'; 

export default class IndexScreen extends Component {
  declare context: React.ContextType<typeof BlogContext>;

  componentDidMount() {
    const navigation = this.props.navigation;

    navigation.setOptions({
      headerRight: (props) => {
        return (
          <TouchableOpacity onPress={() => {
            navigation.navigate('Create');
          }}>
            <Feather name="plus" size={30} style={{ marginRight: 15 }} />
          </TouchableOpacity>
        );
      }
    })
  }
  
  render() {
    return (
      <View>
        <FlatList
          data={this.context.state}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => {
            return (
              <>
                <TouchableOpacity style={styles.blog} onPress={() => this.props.navigation.navigate('Blog Post', { id: item.id }) }>
                  <Text style={styles.title}>{item.title} - {item.id}</Text>
                  <TouchableOpacity onPress={() => {
                    this.context.deleteBlogPost!(item.id);
                  }}>
                    <FontAwesome name="trash" style={styles.icon} />
                  </TouchableOpacity>
                </TouchableOpacity>
              </>
            );
          }}
        />
      </View>
    );
  }
};

IndexScreen.contextType = BlogContext;

const styles = StyleSheet.create({
  blog: {
    borderColor: 'black',
    borderBottomWidth: 1,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20
  },
  icon: {
    fontSize: 24,
    alignSelf: 'center',
  }
});