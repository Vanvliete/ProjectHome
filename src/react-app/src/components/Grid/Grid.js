import React from "react";
import GridItem from "./GridItem";
import styles from './Grid.module.css'

export default class App extends React.Component {
    render () {
        return(
            <>
            <div className={styles["grid-container"]}>
            <h1>Grid</h1>
                <div className={styles["grid-item"]}><GridItem /></div>
                <div className={styles["grid-item"]}><GridItem /></div>
                <div className={styles["grid-item"]}><GridItem /></div>
                <div className={styles["grid-item"]}><GridItem /></div>

            </div>
            </>
        )
       
    }
}