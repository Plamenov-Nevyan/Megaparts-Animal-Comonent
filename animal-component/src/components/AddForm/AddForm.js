import { useState } from "react"
import styles from "./addForm.module.css"

export function AddForm({formValues, onValuesChange, onAddNewAnimal, onShowForm}){
    return (
        <form  className={styles["add-form"]}>
            <fieldset className={styles["add-field"]}>
                <label htmlFor="name">Animal Name</label>
                <input type="text" name="name" id="name" value={formValues.name} onChange={(e) => onValuesChange(e)}/>
            </fieldset>
            <fieldset className={styles["add-field"]}>
                <label htmlFor="image">Image Link</label>
                <input type="text" name="image" id="image" value={formValues.image} onChange={(e) => onValuesChange(e)}/>
            </fieldset>
            <fieldset id={styles["isMammal-field"]} className={styles["add-field"]}>
                <label htmlFor="isMammal">Is it a Mammal</label>
                <input type="checkbox" name="isMammal" id="isMammal" checked = {formValues.isMammal} onChange={(e) => onValuesChange(e)}/>
            </fieldset>
            <button className={styles["submit-new-btn"]} onClick={(e) => {
                onShowForm()
                onAddNewAnimal(e, formValues)
            }}>Add</button>
        </form>
    )
}