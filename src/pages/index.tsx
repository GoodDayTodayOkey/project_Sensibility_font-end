import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

interface RocketInventoryData {
  authUser: {
    name: string;
  };
}

interface RocketInventoryVars {
  login: string;
  password: string;
}

export const ALL_POSTS_QUERY = gql`
  query($login: String, $password: String) {
    authUser(login: $login, password: $password){
      name
    }
  }
`

const IndexPage = (props) => {
  const { data: { authUser: { name } } } = useQuery<RocketInventoryData, RocketInventoryVars>(ALL_POSTS_QUERY, { variables: { login: 'log', password: "pas" } });
  return <div>Welcome to Next.js!{name}</div>;
}

export default withApollo(IndexPage, {
  // Disable apollo ssr fetching in favour of automatic static optimization
  ssr: false,
})

// interface Flavoring<FlavorT> {
//   _type?: FlavorT;
// }

// export type Flavor<T, FlavorT> = T & Flavoring<FlavorT>;

// export type UserID = Flavor<string, 'User'>;

// export type User = {
//   name: string;
// }


// type UserID = string & { _type: 'UserID' };
// type AnotherID = string & { _type: 'AnotherID' };

// type User = {
//   name: string;
// }

// const id: UserID = '1' as UserID;
// const aid: AnotherID = '1' as AnotherID;
// remove