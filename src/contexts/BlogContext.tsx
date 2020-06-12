import createDataContext from './createDataContext';

export interface BlogAttribute {
  title: string;
  content: string;
};

export interface BlogPost {
  id: number;
  title: string;
  content: string;
};

interface  BlogContextProps {
  state: BlogPost[];
  addBlogPost: (post: BlogAttribute) => void;
  deleteBlogPost: (id: number) => void;
  editBlogPost: (post: BlogPost) => void;
};

type Action = 
  | { type: "Add"; payload: BlogAttribute }
  | { type: "Edit"; payload: BlogPost }
  | { type: "Delete"; payload: number };
  
const reducer = (prevValue: BlogPost[], action: Action): BlogPost[] => {
  switch(action.type) {
    case 'Add':
      const newPost = {
        ...action.payload,
        id: Math.floor(Math.random() * 99999)
      };
      return [ ...prevValue, newPost ];
    case 'Edit':
      return prevValue.map((item) => {
        return item.id === action.payload.id
          ? action.payload
          : item;
      });
    case 'Delete':
      return prevValue.filter((item) => {
        return item.id !== action.payload;
      });
  }
};

const addBlogPost = (dispatch) => {
  return (post: BlogAttribute) => {
    dispatch({ type: 'Add', payload: post });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id: number) => {
    dispatch({ type: 'Delete', payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (post: BlogPost) => {
    dispatch({ type: 'Edit', payload: post });
  };
};

export const { Context, Provider } = createDataContext<BlogContextProps, typeof reducer>(
  reducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: "Test Title", content: "Test Content", id: 1 }]
);