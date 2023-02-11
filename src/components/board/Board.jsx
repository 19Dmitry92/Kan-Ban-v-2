import List from "../list/List";
import css from "./Board.module.css";

const Board = (props) => {
   const { tasks, setTasks } = props;

   const addNewTask = (title, description, type) => {
      const task = {
         id: title,
         title,
         description,
         created: new Date().toISOString(),
         status: type, // 'backlog' was here. Пробрасываем сюда type и чему он равен туда и идет задача
      };
      setTasks([...tasks, task]);
   };
   let names = ["Backlog", "Ready", "In progress", "Finished"];
   return (
      <div className={css.board}>
         {names.map((type) => (
            <List
               type={type}
               title={type}
               tasks={tasks}
               addNewTask={addNewTask}
               setTasks={setTasks} //не было, прокинул
            />
         ))}
      </div>
   );
};

export default Board;
