export type TTask = {
  id: string;
  title: string;
  desc: string;
  dueDate: string;
  priority: string;
  isCompleted: boolean;
};

export type TInitialState = {
  tasks: TTask[];
  filter: "all" | "mid" | "high" | "low";
};
