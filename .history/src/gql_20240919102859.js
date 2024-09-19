import { gql } from "@apollo/client";

// Mutation to add a new book
export const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!, $published: Int!, $genres: [String!]!) {
    addBook(title: $title, author: $author, published: $published, genres: $genres) {
      title
      author {
        name
      }
      published
    }
  }
`;

// Queries to fetch all books and authors
export const ALL_BOOKS = gql`
  query {
    allBooks {
      title
      author {
        name
      }
      published
    }
  }
`;

export const ALL_AUTHORS = gql`
  query {
    allAuthors {
      name
      born
      bookCount
    }
  }
`;
