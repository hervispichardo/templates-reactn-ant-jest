import React from 'react';
import { withRouter } from 'react-router-dom'

function Project({ match }) {


  return (
    <div>
      Project {match.params.name}
    </div>
  );
}

export default withRouter(Project);