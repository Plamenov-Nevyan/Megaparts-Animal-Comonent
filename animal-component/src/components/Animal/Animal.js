import styles from "./animal.module.css"
export function Animal({name, isMammal, image}){
    return (
        <div className={styles["animal-item"] + " " + styles["fade-in"]}>
            <div className={styles["animal-image"]}>
                <img src={image} alt={name + "-image"} />
            </div>
            <div className={styles["animal-description"]}>
                <h2>Name: {name}</h2>
                <h2>Is it a Mammal: { isMammal
                    ? "Yes"
                    : "No"
                }
                </h2>
            </div>
        </div>
    )
}