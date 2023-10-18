
export function Animal({name, isMammal, image}){
    return (
        <div className="animal-item">
            <div className="animal-image">
                <img src={image} alt={name + "-image"} />
            </div>
            <div className="animal-description">
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