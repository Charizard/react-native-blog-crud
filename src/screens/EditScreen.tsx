import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Context as BlogContext, BlogPost } from '../contexts/BlogContext';
import BlogForm from '../components/BlogForm';

interface Props {}

export default class EditScreen extends Component<Props> {
  context!: React.ContextType<typeof BlogContext>;
  blog!: BlogPost;

  editBlogPost(post: BlogPost) {
    this.context.editBlogPost!(post);
    this.props.navigation.pop();
  }

  render() {
    const blogId = this.props.route.params.id;
    this.blog = (this.context.state!.find((item) => {
      return item.id === blogId;
    }) as BlogPost);

    return <BlogForm
      formType='edit'
      blogPost={this.blog}
      onSubmit={(post) => this.editBlogPost(post)}
    />;
  }
};

EditScreen.contextType = BlogContext;

const styles = StyleSheet.create({});