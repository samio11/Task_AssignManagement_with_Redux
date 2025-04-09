import React from "react";
import { AddTaskBtn } from "./AddTaskBtn";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { TTask } from "@/interfaces/TaskInterface";
import TaskCard from "./TaskCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  selectFilter,
  selectTask,
  updateFilter,
} from "@/redux/features/task/taskSlice";

const Home = () => {
  const tasks = useAppSelector(selectTask);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2 className="text-2xl text-center font-bold italic">
        Tasks to Complete
      </h2>
      <div className=" flex justify-end items-end">
        <AddTaskBtn></AddTaskBtn>
      </div>
      <div className="flex justify-end items-center my-3">
        <Tabs defaultValue="all" className="w-auto ">
          <TabsList>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("all"))}
              className="p-4 m-2"
              value="all"
            >
              all
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("high"))}
              className="p-4 m-2"
              value="high"
            >
              high
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("mid"))}
              className="p-4 m-2"
              value="mid"
            >
              mid
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("low"))}
              className="p-4 m-2"
              value="low"
            >
              low
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {tasks &&
          tasks.map((x: TTask) => <TaskCard key={x.id} data={x}></TaskCard>)}
      </div>
    </div>
  );
};

export default Home;
