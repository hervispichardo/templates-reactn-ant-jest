import { gql } from "apollo-boost";

const UPDATE_TASK = gql`
  mutation updateTask(_id: _id, complete: $complete){
    updateTask(_id: $_id, complete: $complete) {
      id
      title
      complete
    }
  }
`;

export {
  UPDATE_TASK
}