import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../contexts/BlogContext';
import { Feather } from '@expo/vector-icons'; 

export default class ShowScreen extends Component {
  declare context: React.ContextType<typeof BlogContext>;

  componentDidMount() {
    const { navigation, route } = this.props;
    const blogId = route.params.id;

    navigation.setOptions({
      headerRight: (props) => {
        return (
          <TouchableOpacity onPress={() => {
            navigation.navigate('Edit', { id: blogId });
          }}>
            <Feather name="edit-2" size={30} style={{ marginRight: 15 }} />
          </TouchableOpacity>
        );
      }
    })
  }

  render() {
    const blogId = this.props.route.params.id;
    const blog = this.context.state!.find((item) => {
      return item.id === blogId;
    });

    return (
      <View>
        <Text>{blog.title}</Text>
        <Text>{blog.content}</Text>
      </View>
    );
  }
};

ShowScreen.contextType = BlogContext;

const styles = StyleSheet.create({});