import React, { Component } from 'react';
import Column from './column';

class InitialList extends Component {
    render() {
        const { column, taskMap, index } = this.props;
        const tasks = column.taskIds.map(taskId => taskMap[taskId]);
        return <Column column={column} tasks={tasks} index={index} />;
    }
}

export default InitialList;