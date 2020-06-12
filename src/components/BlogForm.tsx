import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, Button, View } from 'react-native';
import { BlogPost } from '../contexts/BlogContext';

interface CreateBlogFormAttributes {
  formType: 'add';
  onSubmit: (blog: Partial<BlogPost>) => void;
}

interface EditBlogFormAttributes {
  formType: 'edit';
  onSubmit: (blog: BlogPost) => void;
  blogPost: BlogPost;
}

export default class BlogForm extends Component<CreateBlogFormAttributes | EditBlogFormAttributes, Partial<BlogPost>> {
  constructor(args) {
    super(args);
    this.state = this.props.formType === 'edit' ? this.props.blogPost : {
      title: "",
      content: ""
    };
  }

  render() {
    const buttonText = this.props.formType === 'edit' ? "Edit Blog Post" : "Add Blog Post";
    return (
      <View style={styles.view}>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput style={styles.input} placeholder="Title" value={this.state.title} onChangeText={(val) => this.setState({ title: val }) } />
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput style={styles.input} placeholder="Content" value={this.state.content} onChangeText={(val) => this.setState({ content: val }) }/>
        <Button title={buttonText} onPress={() => this.props.onSubmit(this.state)} />
      </View>
    );
  }
};


const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  label: {
    fontSize: 20,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginVertical: 10
  }
});