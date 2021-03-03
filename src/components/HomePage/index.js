import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import initialData from './initial-data';

import InnerList from "./../HomePage/InitialList"

const Container = styled.div`
  display: flex;
`;


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: {
                'task-1': { id: 'task-1', content: 'Take out the garbage' },
                'task-2': { id: 'task-2', content: 'Watch my favorite show' },
                'task-3': { id: 'task-3', content: 'Charge my phone' },
                'task-4': { id: 'task-4', content: 'Cook dinner' },
            },
            columns: {
                'column-1': {
                    id: 'column-1',
                    title: 'To do',
                    taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
                },
                'column-2': {
                    id: 'column-2',
                    title: 'In progress',
                    taskIds: [],
                },
                'column-3': {
                    id: 'column-3',
                    title: 'Done',
                    taskIds: [],
                },
            },
            // Facilitate reordering of the columns
            columnOrder: ['column-1', 'column-2', 'column-3'],
        };
    }

    onDragStart = (start, provided) => {
        provided.announce(
            `You have lifted the task in position ${start.source.index + 1}`,
        );
    };

    onDragUpdate = (update, provided) => {
        const message = update.destination
            ? `You have moved the task to position ${update.destination.index + 1}`
            : `You are currently not over a droppable area`;

        provided.announce(message);
    };

    onDragEnd = (result, provided) => {
        const message = result.destination
            ? `You have moved the task from position
            ${result.source.index + 1} to ${result.destination.index + 1}`
            : `The task has been returned to its starting position of
            ${result.source.index + 1}`;

        provided.announce(message);

        const { destination, source, draggableId, type } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        if (type === 'column') {
            const newColumnOrder = Array.from(this.state.columnOrder);
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index, 0, draggableId);

            const newState = {
                ...this.state,
                columnOrder: newColumnOrder,
            };
            this.setState(newState);
            return;
        }

        const home = this.state.columns[source.droppableId];
        const foreign = this.state.columns[destination.droppableId];

        if (home === foreign) {
            const newTaskIds = Array.from(home.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newHome = {
                ...home,
                taskIds: newTaskIds,
            };

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newHome.id]: newHome,
                },
            };

            this.setState(newState);
            return;
        }

        // moving from one list to another
        const homeTaskIds = Array.from(home.taskIds);
        homeTaskIds.splice(source.index, 1);
        const newHome = {
            ...home,
            taskIds: homeTaskIds,
        };

        const foreignTaskIds = Array.from(foreign.taskIds);
        foreignTaskIds.splice(destination.index, 0, draggableId);
        const newForeign = {
            ...foreign,
            taskIds: foreignTaskIds,
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newHome.id]: newHome,
                [newForeign.id]: newForeign,
            },
        };
        this.setState(newState);
    };

    render() {
        return (
            <DragDropContext
                onDragStart={this.onDragStart}
                onDragEnd={this.onDragEnd}
            >
                <Droppable
                    droppableId="all-columns"
                    direction="horizontal"
                    type="column"
                >
                    {provided => (
                        <Container
                            {...provided.droppableProps}
                            innerRef={provided.innerRef}
                        >
                            {this.state.columnOrder.map((columnId, index) => {
                                const column = this.state.columns[columnId];
                                return (
                                    <InnerList
                                        key={column.id}
                                        column={column}
                                        taskMap={this.state.tasks}
                                        index={index}
                                    />
                                );
                            })}
                            {provided.placeholder}
                        </Container>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

export default HomePage;