import { useState } from "react";
import { Link } from "react-router-dom";
import { LIST_COLORS } from "../../config";
import FormAddNewTask from "../forms/FormAddNewTask";
import css from "./List.module.css";
import DropDown from "../dropdown/DropDown";

const List = (props) => {
   const { type, title, tasks, addNewTask, setTasks } = props;
   const [isFormVisible, setFormVisible] = useState(false);

   const handleAddNewClick = () => {
      setFormVisible(!isFormVisible);
   };

   const formSubmit = (title, description) => {
      addNewTask(title, description, type);
      setFormVisible(false);
   };
   // Константы для длины массива (активность кнопки, и отображение надписей)

   const BlLeng = tasks.filter((task) => task.status === "Backlog");
   const ReLeng = tasks.filter((task) => task.status === "Ready");
   const InLeng = tasks.filter((task) => task.status === "In progress");
   const FiLeng = tasks.filter((task) => task.status === "Finished");

   return (
      <div className={css.list} onMouseLeave={() => setFormVisible(false)}>
         <h2 className={css.listTitle}>{title}</h2>
         {tasks
            .filter((el) => el.status === type)
            .map((task) => (
               <Link
                  to={`/tasks/${task.id}`}
                  key={task.id}
                  className={css.taskLink}
               >
                  <div
                     className={css.task}
                     style={{ background: LIST_COLORS[task.id] }}
                  >
                     {task.title}
                  </div>
               </Link>
            ))}

         {type === "Backlog" && isFormVisible && (
            <FormAddNewTask formSubmit={formSubmit} /> // вывод формы в списке backlog
         )}
         {type === "Backlog" && (
            <div>
               <p className={css.listsp}
                  style={{
                     display:
                        !BlLeng.length && !isFormVisible ? "inline" : "none",
                  }}
               >
                  No tasks added yet
               </p>
               <button
                  className={css.addButton}
                  onClick={handleAddNewClick}
                  style={{
                     display: !isFormVisible ? "block" : "none",
                     color: "#000",
                  }}
               >
                  + Add card
               </button>
            </div>
         )}

         {type === "Ready" && isFormVisible && (
            <DropDown // проброс в дропдаун
               type={type}
               tasks={tasks}
               setFormVisible={setFormVisible}
               isFormVisible={isFormVisible}
               addNewTask={addNewTask}
               setTasks={setTasks}
            />
         )}

         {type === "Ready" && (
            <div>
               <p style={{ display: !ReLeng.length ? "inline" : "none" }}>
                  No tasks added yet
               </p>
               <button
                  disabled={!BlLeng.length}
                  className={css.addButton}
                  onClick={handleAddNewClick}
                  style={{
                     display: !isFormVisible ? "block" : "none",
                     color: BlLeng.length ? "#000" : "#737373",
                     cursor: BlLeng.length ? "pointer" : "default",
                  }}
               >
                  + Add card
               </button>
            </div>
         )}

         {type === "In progress" && isFormVisible && (
            <DropDown // проброс в дропдаун
               type={type}
               tasks={tasks}
               setFormVisible={setFormVisible}
               isFormVisible={isFormVisible}
               addNewTask={addNewTask}
               setTasks={setTasks}
            />
         )}
         {type === "In progress" && (
            <div>
               <p style={{ display: !InLeng.length ? "inline" : "none" }}>
                  No tasks added yet
               </p>
               <button
                  disabled={!ReLeng.length}
                  className={css.addButton}
                  onClick={handleAddNewClick}
                  style={{
                     display: !isFormVisible ? "block" : "none",
                     color: ReLeng.length ? "#000" : "#737373",
                     cursor: ReLeng.length ? "pointer" : "default",
                  }}
               >
                  + Add card
               </button>
            </div>
         )}

         {type === "Finished" && isFormVisible && (
            <DropDown // проброс в дропдаун
               type={type}
               tasks={tasks}
               setFormVisible={setFormVisible}
               isFormVisible={isFormVisible}
               addNewTask={addNewTask}
               setTasks={setTasks}
            />
         )}
         {type === "Finished" && (
            <div>
               <p style={{ display: !FiLeng.length ? "inline" : "none" }}>
                  No tasks added yet
               </p>
               <button
                  disabled={!InLeng.length}
                  className={css.addButton}
                  onClick={handleAddNewClick}
                  style={{
                     display: !isFormVisible ? "block" : "none",
                     color: InLeng.length ? "#000" : "#737373",
                     cursor: InLeng.length ? "pointer" : "default",
                  }}
               >
                  + Add card
               </button>
            </div>
         )}
      </div>
   );
};

export default List;
