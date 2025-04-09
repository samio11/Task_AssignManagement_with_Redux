import { TTask } from "@/interfaces/TaskInterface";
import { cn } from "@/lib/utils";
import { deleteTask, toggleTask } from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import React from "react";
import { UpdateTask } from "./updateTask";

const TaskCard = ({ data }) => {
  console.log(data);
  const dispatch = useAppDispatch();
  const handleDoneTask = (id: string) => {
    dispatch(toggleTask(id));
  };
  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };
  return (
    <div>
      <div className="card shadow-xl card-dash bg-base-100 w-full">
        <div className="card-body">
          <h2
            className={cn("card-title", {
              "line-through": data.isCompleted === true,
            })}
          >
            {data.title}
          </h2>
          <p>{data.desc}</p>
          <p
            className={cn("badge badge-soft p-3", {
              "badge-error": data.priority === "high",
              "badge-warning": data.priority === "mid",
              "badge-success": data.priority === "low",
            })}
          >
            {data.priority}
          </p>
          <p>{data.dueDate}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleDoneTask(data.id)}
              className="btn btn-primary btn-outline"
            >
              {data.isCompleted === true ? "Revert Task" : "Done"}
            </button>
            <UpdateTask></UpdateTask>
            <button
              onClick={() => handleDelete(data.id)}
              className="btn btn-error btn-outline"
            >
              delete Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
