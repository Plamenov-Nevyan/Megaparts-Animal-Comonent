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
    const [error, setError] = useState('')
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

    function validateNewAnimal(e, formValues){
        e.preventDefault()
        let isThereError = false
        if(formValues.name === '' && formValues.image === ''){
            setError('Please fill out the name and image fields, my friend !')
            isThereError = true
        }else if(!formValues.image.startsWith('http') && !formValues.image.startsWith('https')){
            setError('Please provide a valid image link, my friend !')
            isThereError = true
        }
        return isThereError
    }
    
    function confirmErrors(){
        setError('')
    }

    return (
        <header className={styles["site-header"]}>
            <img className={animateDecorImg ? styles["header-decor"] : ( styles["header-decor"] + " " + styles["header-decor-in-view"])}  src={penguin} alt="scholar-penguin-image"/>
            {error !== '' && <div className={styles['error-bubble-container']}>
                <div className = {styles["error-bubble"]}>
                    {error}
                    <button className={styles["confirm-error-btn"]} onClick={() => confirmErrors()}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    </button>
                </div>
            </div>
            }
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
                validateNewAnimal={validateNewAnimal}
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