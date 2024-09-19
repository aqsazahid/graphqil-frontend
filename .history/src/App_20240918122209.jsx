import { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
const client = new ApolloClient({
  uri: "YOUR_GRAPHQL_SERVER_URI",
  cache: new InMemoryCache(),
});
const App = () => {
  const [page, setPage] = useState("authors");

  return (
    <ApolloProvider client={client}>
    <div>
      <div>
        <button onClick={() => setPage("authors")}>authors</button>
        <button onClick={() => setPage("books")}>books</button>
        <button onClick={() => setPage("add")}>add book</button>
      </div>

      <Authors show={page === "authors"} />

      <Books show={page === "books"} />

      <NewBook show={page === "add"} />
    </div>
    </ApolloProvider>
  );
};

export default App;
