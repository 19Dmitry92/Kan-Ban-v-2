import css from "./Footer.module.css";

function Footer(props) {
   const { tasks } = props;
   const countActive = tasks.filter(
      (task) =>
         // task.status === "Backlog" ||
         // task.status === "Ready" ||
         task.status === "In progress" // Раскоменьтить строки выше для вклюения первых 2х в счетчик
   );
   const countFinished = tasks.filter((task) => task.status === "Finished"); // счетчик finished отдельно
   return (
      <footer className={css.footer}>
         <div className={css.counts}>
            <div className={css.footerDiv}>
               <p className={css.count}>
                  Active tasks: {countActive.length}&nbsp; &nbsp; &nbsp; &nbsp;
                  Finished tasks: {countFinished.length}
               </p>
            </div>
         </div>
         <div className={css.copy}>Kanban board by Dmitry, 2023</div>
      </footer>
   );
}

export default Footer;
