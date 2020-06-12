import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Context as BlogContext, BlogAttribute, BlogPost } from '../contexts/BlogContext';
import BlogForm from '../components/BlogForm';

interface Props {};

export default class CreateScreen extends Component<Props, Partial<BlogAttribute>> {
  context!: React.ContextType<typeof BlogContext>;

  createBlogPost(post: Partial<BlogPost>) {
    this.context.addBlogPost!(post);
    this.props.navigation.navigate('Blog Posts');
  }
  
  render() {
    return <BlogForm
      formType='add'
      onSubmit={(post) => this.createBlogPost(post)}
    />;
  }
};

CreateScreen.contextType = BlogContext;

const styles = StyleSheet.create({});