import { createContext, useReducer } from "react";

// Create the context with a default value
export const BlogsContext = createContext({ blogs: [], dispatch: () => {} });

// Reducer function
export const blogsReducer = (state, action) => {
  switch (action.type) {
    case "SET_BLOGS":
      return { blogs: action.payload }; // Set fetched blogs
    case "CREATE_BLOG":
      return { blogs: [action.payload, ...state.blogs] }; // Add new blog at the beginning
    case "DELETE_BLOG":
      return { blogs: state.blogs.filter((blog) => blog._id !== action.payload) }; // Remove deleted blog
    default:
      return state;
  }
};

// Context Provider Component
export const BlogsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogsReducer, { blogs: [] });

  return (
    <BlogsContext.Provider value={{ blogs: state.blogs, dispatch }}>
      {children}
    </BlogsContext.Provider>
  );
};
