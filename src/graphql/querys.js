import { gql } from "apollo-boost";


const ALL_TASKS = gql`
  {
    tasks{
      _id,
      title,
      content,
      complete
    }
  }
`;



export {
  ALL_TASKS
}