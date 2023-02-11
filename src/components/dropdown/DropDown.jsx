import css from "./DropDown.module.css";

const DropDown = (props) => {
   const { type, tasks, setFormVisible, setTasks } = props;

   const dropRemove = (id, status) => {
      if (status === "Backlog") {
         setTasks(
            tasks.map((task) =>
               task.id === id ? { ...task, status: "Ready" } : task
            )
         );
      }
      if (status === "Ready") {
         setTasks(
            tasks.map((task) =>
               task.id === id ? { ...task, status: "In progress" } : task
            )
         );
      }
      if (status === "In progress") {
         setTasks(
            tasks.map((task) =>
               task.id === id ? { ...task, status: "Finished" } : task
            )
         );
      }

      setFormVisible(false);
   };

   return (
      <div className={css.arrow}>
         <div className={css.drdtitle}>
            {type === "Ready" && // для выбора из ready
               tasks
                  .filter((el) => el.status === "Backlog")
                  .map((title) => (
                     <p
                        key={title.id}
                        id={title.id}
                        title={title.title}
                        data-tag="title"
                        data-desc="description"
                        data-des={title.description}
                        className={css.title}
                        onClick={() => dropRemove(title.id, title.status)}
                     >
                        {title.title}
                     </p>
                  ))}
            {type === "In progress" && // для выбора из ready
               tasks
                  .filter((el) => el.status === "Ready")
                  .map((title) => (
                     <p
                        key={title.id}
                        id={title.id}
                        title={title.title}
                        data-tag="title"
                        data-desc="description"
                        data-des={title.description}
                        className={css.title}
                        onClick={() => dropRemove(title.id, title.status)}
                     >
                        {title.title}
                     </p>
                  ))}
            {type === "Finished" && // для выбора из ready
               tasks
                  .filter((el) => el.status === "In progress")
                  .map((title) => (
                     <p
                        key={title.id}
                        id={title.id}
                        title={title.title}
                        data-tag="title"
                        data-desc="description"
                        data-des={title.description}
                        className={css.title}
                        onClick={() => dropRemove(title.id, title.status)}
                     >
                        {title.title}
                     </p>
                  ))}
         </div>
      </div>
   );
};
export default DropDown;
