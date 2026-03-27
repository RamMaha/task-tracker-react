import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, onDelete, onReorder }) {
  return (
    <DragDropContext onDragEnd={onReorder}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div
            className="space-y-3 mt-4"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400">
                No tasks found
              </p>
            ) : (
              tasks.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={String(task.id)}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TaskItem
                        task={task}
                        onToggle={onToggle}
                        onDelete={onDelete}
                      />
                    </div>
                  )}
                </Draggable>
              ))
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TaskList;
