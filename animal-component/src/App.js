import {useState, useRef, useEffect} from 'react';
import './App.css';
import { Animal } from './components/Animal/Animal';
import { Header } from './components/Header/Header';

function App() {
  const [animals, updateAnimals] = useState([   // <-- animal articles state
    { name: 'Lion', isMammal: true, image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=500" }, 
    { name: 'Snake', isMammal: false, image: "https://plus.unsplash.com/premium_photo-1675715924047-a9cf6c539d9b?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25ha2V8ZW58MHx8MHx8fDA%3D&w=500"}, 
    { name: 'Dolphin', isMammal: true, image: "https://images.unsplash.com/photo-1547382442-d17c21625a44?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9scGhpbnxlbnwwfHwwfHx8MA%3D%3D&w=500" }, 
    { name: 'Crocodile', isMammal: false, image: "https://images.unsplash.com/photo-1611069648374-733e7bb73e5c?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3JvY29kaWxlfGVufDB8fDB8fHww&w=500" },
     { name: 'Elephant', isMammal:true, image: "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RWxlcGhhbnR8ZW58MHx8MHx8fDA%3D&w=500" }, 
     { name: 'Shark', isMammal: false, image: "https://images.unsplash.com/photo-1531959870249-9f9b729efcf4?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2hhcmt8ZW58MHx8MHx8fDA%3D&w=500" }, 
     { name: 'Gorilla', isMammal: true, image: "https://plus.unsplash.com/premium_photo-1661843402797-d51337c5e42e?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29yaWxsYXxlbnwwfHwwfHx8MA%3D%3D&w=500" }, 
     { name: 'Parrot', isMammal: false, image: "https://images.unsplash.com/photo-1604826010917-65cf53d6249b?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBhcnJvdHxlbnwwfHwwfHx8MA%3D%3D&w=500" }, 
     { name: 'Kangaroo', isMammal: true, image: "https://images.unsplash.com/photo-1575699914911-0027c7b95fb6?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2FuZ2Fyb298ZW58MHx8MHx8fDA%3D&w=500" }, 
     { name: 'Tiger', isMammal: true, image: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VGlnZXJ8ZW58MHx8MHx8fDA%3D&w=500" }, 
     { name: 'Penguin', isMammal: false, image: "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVuZ3VpbnxlbnwwfHwwfHx8MA%3D%3D&w=500" }, 
     { name: 'Hippopotamus', isMammal: true, image: "https://images.unsplash.com/photo-1588440546249-f32b6f1c721c?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGlwcG9wb3RhbXVzfGVufDB8fDB8fHww&w=500" },
     {name: "White Bear", isMammal: true, image: "https://images.unsplash.com/photo-1514061842379-da1141f46ab9?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBiZWFyfGVufDB8fDB8fHww&w=500"},
     {name: "Wolf", isMammal: true, image: "https://images.unsplash.com/photo-1607350999170-b893fef057ea?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbGZ8ZW58MHx8MHx8fDA%3D&w=500"},
     {name: "Swallow", isMammal: false, image: "https://images.unsplash.com/photo-1444465146604-4fe67bfac6e8?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dhbGxvd3xlbnwwfHwwfHx8MA%3D%3D&w=500"},
     {name: "Antellope", isMammal: false, image: "https://images.unsplash.com/photo-1541793647037-86afaddc1cf0?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW50ZWxvcGV8ZW58MHx8MHx8fDA%3D&w=500"},
     {name: "Raven", isMammal: false, image: "https://images.unsplash.com/photo-1433888376991-1297486ba3f5?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmF2ZW58ZW58MHx8MHx8fDA%3D&w=500"}
    ])

    // using intersection observer and useRef hook (for manipulating DOM), i tried to create an animation for fading in individual articles
    // when user scrolls and they appear in the viewport, not working as intended since all articles fade in at the same time
    const appRef = useRef()
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      });
      appRef.current.querySelectorAll('.fade-in').forEach((item) => {
        observer.observe(item);
      });
    }, []);


    function onAddNewAnimal(e, animalData){
      // create new article and add it to the existing state 
      e.preventDefault()
      updateAnimals(oldData => [...oldData, animalData])
    }
  return (
    <>
    <Header onAddNewAnimal={onAddNewAnimal}/>
    <div className="App" ref={appRef}>
      {animals.map((animal, index) => <Animal key={index} name={animal.name} isMammal={animal.isMammal} image={animal.image} />)}
    </div>
    </>
  );
}

export default App;
