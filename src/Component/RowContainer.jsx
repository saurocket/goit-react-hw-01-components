import styles from './Main.module.css'
export const RowContainer = ({children}) => {
    return (
       <section>
           <div className="container">
               <div className={"main_list row " + styles.main_container}>
                   {children}
               </div>
           </div>
       </section>
    )
}
