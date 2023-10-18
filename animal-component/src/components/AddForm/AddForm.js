import styles from "./addForm.module.css"

export function AddForm({formValues, onValuesChange, onAddNewAnimal, onShowForm, validateNewAnimal}){
    // Component for a form that allows the user to create a new animal article
    // It accepts the form values in Header component so it can accordingly set the values of it's inputs, onValuesChange function
    // that will allow to update form's state in parent component, addnewAnimal function to create new article in App component, showForm
    // function , so the form's visibility state can be changed to hidden when creating new article and validation function for empty
    // inputs 
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
                let error = validateNewAnimal(e, formValues)
                if(!error){
                    onShowForm()
                    onAddNewAnimal(e, formValues)
                }
            }}>Add</button>
        </form>
    )
}