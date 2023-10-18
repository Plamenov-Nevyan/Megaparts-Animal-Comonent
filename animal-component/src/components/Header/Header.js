import { useState } from "react"
import { AddForm } from "../AddForm/AddForm"
import styles from "./header.module.css"
import logo1 from "./logo1.png"
import logo2 from "./logo2.png"
import penguin from "./penguin.png"

export function Header({onAddNewAnimal}){
    const [addFormState, openCloseAddForm] = useState(false)
    function onShowForm(){
        addFormState ? openCloseAddForm(false) : openCloseAddForm(true)
    }
    const [formValues, updateFormValues] = useState({
        name: '',
        isMammal: false,
        image: ''
    })

    function onValuesChange(e){
        updateFormValues(oldValues => {
            return {
                ...oldValues,
                [e.target.name] : e.target.type === "checkbox" ? e.target.checked : e.target.value
            }
        })
    }

    return (
        <header className={styles["site-header"]}>
            <img src={penguin} id={styles["header-decor"]} alt="scholar-penguin-image"/>
            <section className={styles["logo-section"]}>
              <img src={logo1} alt="logo-1st part" />
              <img src={logo2} alt="logo-2nd part" />
            </section>
            <section className={styles["add-new-section"]}>
                {addFormState && <AddForm formValues={formValues} onValuesChange={onValuesChange} onAddNewAnimal={onAddNewAnimal}/>}
                <button id={styles["add-new-btn"]} onClick={() => onShowForm()}>
                    {addFormState
                        ? "Cancel"
                        : "Add new animal"
                    }
                </button>
            </section>
        </header>
    )
}