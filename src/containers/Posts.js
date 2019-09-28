import React from 'reactn';
import { List, Button } from 'antd'
import { useQuery, useMutation } from "@apollo/react-hooks";
import { ALL_TASKS } from '../graphql/querys'
import { UPDATE_TASK } from '../graphql/mutations'


function Posts() {

  const { loading: loadingTasks, error: errorTasks, data: dataTasks } = useQuery(
    ALL_TASKS
  );

  const [updateTask, { data }] = useMutation(UPDATE_TASK);

  const update = (_id, complete) => {
    updateTask({ variables: { _id: _id, complete: complete } });
  }

  if (loadingTasks) return <p>Loading...</p>;
  if (errorTasks) return <p>There's an error: {errorTasks.message}</p>;

  const { tasks } = dataTasks;

  console.log("data update:", data)
  return (
    <div>
      <List
        header={<div>TODO</div>}
        bordered
        dataSource={tasks}
        renderItem={task => (
          <List.Item>
            <List.Item.Meta
              title={task.title}
              description={task.content}
            />
            <Button onClick={ () => update(task._id, !task.complete)}>{task.complete ? 'Iniciar' : 'Terminar'}</Button>
          </List.Item>
        )}
      />
    </div>
  );
}

export default Posts;