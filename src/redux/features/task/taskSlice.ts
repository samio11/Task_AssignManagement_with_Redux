import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { TInitialState, TTask } from "../../../interfaces/TaskInterface";
import { RootState } from "../../store";

const initialState: TInitialState = {
  tasks: [
    {
      id: "s-111",
      title: "welcome to web development",
      desc: "here you will learn how to do development from scrach",
      dueDate: "13-10-2025",
      priority: "high",
      isCompleted: false,
    },
    {
      id: "s-112",
      title: "welcome to App development",
      desc: "here you will learn how to do development from skarch",
      dueDate: "18-10-2025",
      priority: "mid",
      isCompleted: false,
    },
  ],
  filter: "all",
};

type DraftTask = Pick<TTask, "title" | "desc" | "dueDate" | "priority">;
const createTask = (data: DraftTask): TTask => {
  const id = nanoid();
  const isCompleted = false;
  return { id, isCompleted, ...data };
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const task = createTask(action.payload);
      state.tasks.push(task);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((x) => x.id !== action.payload);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const foundTask = state.tasks.find((x) => x.id === action.payload);
      if (foundTask) {
        foundTask.isCompleted = !foundTask.isCompleted;
      }
    },
    updateTask: (state, action: PayloadAction<TTask>) => {
      state.tasks = state.tasks.map((x) =>
        x.id === action.payload.id ? action.payload : x
      );
    },
    updateFilter: (
      state,
      action: PayloadAction<"all" | "mid" | "high" | "low">
    ) => {
      state.filter = action.payload;
    },
  },
});
export const selectTask = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "low") {
    return state.todo.tasks.filter((x) => x.priority === "low");
  } else if (filter === "mid") {
    return state.todo.tasks.filter((x) => x.priority === "mid");
  } else if (filter === "high") {
    return state.todo.tasks.filter((x) => x.priority === "high");
  } else {
    return state.todo.tasks;
  }
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};
export const { addTask, deleteTask, toggleTask, updateFilter, updateTask } =
  taskSlice.actions;
export default taskSlice.reducer;
