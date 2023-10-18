import { useState, useEffect } from "react"
import { AddForm } from "../AddForm/AddForm"
import styles from "./header.module.css"
import logo1 from "./logo1.png"
import logo2 from "./logo2.png"
import penguin from "./penguin.png"

export function Header({onAddNewAnimal}){
    const [addFormState, openCloseAddForm] = useState(false)
    const [isLogoInViewport, setIsLogoInViewport] = useState(false)
    const [animateDecorImg, setAnimateDecorImg] = useState(false)
    const [formValues, updateFormValues] = useState({
        name: '',
        isMammal: false,
        image: ''
    })
    function onShowForm(){
        if(addFormState){
            updateFormValues(() => {
                return {
                    name: '',
                    isMammal: false,
                    image: ''
                }
            })
            openCloseAddForm(false)
        }else {
            openCloseAddForm(true)
        }
    }

    useEffect(() => {
        setIsLogoInViewport(true)
    }, [])

    useEffect(() => {
        const animationTimeout = setTimeout(() => {
            setAnimateDecorImg(true);
        }, 500);
    
        return () => {
          clearTimeout(animationTimeout);
        };
      }, []);

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
            <img className={animateDecorImg ? styles["header-decor"] : ( styles["header-decor"] + " " + styles["header-decor-in-view"])}  src={penguin} alt="scholar-penguin-image"/>
            <section id={(isLogoInViewport ? styles['logo-in-view'] : '')} className={styles["logo-section"]}>
              <img src={logo1} alt="logo-1st part" />
              <img src={logo2} alt="logo-2nd part" />
            </section>
            <section id={(isLogoInViewport ? styles['add-new-in-view'] : '')} className={styles["add-new-section"]}>
                {addFormState && <AddForm 
                formValues={formValues} 
                onValuesChange={onValuesChange} 
                onAddNewAnimal={onAddNewAnimal}
                onShowForm={onShowForm}
                />
                }
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