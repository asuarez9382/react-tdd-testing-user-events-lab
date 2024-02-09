import { useState } from "react"; 

function App() {

  const [artIsChecked, setArtIsChecked] = useState(false);
  const [musicIsChecked, setMusicIsChecked] = useState(false);
  const [foodIsChecked, setFoodIsChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleArt = (e) => setArtIsChecked(e.target.checked);
  const toggleMusic = (e) => setMusicIsChecked(e.target.checked);
  const toggleFood = (e) => setFoodIsChecked(e.target.checked);

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    setIsSubmitted(true);

  }


  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      {isSubmitted ? <h2>submitted</h2>: ""}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            placeholder="Enter your name" 
            onChange={handleNameChange} 
            value={name}
          />
        </label>
        <label>
          Email address:
          <input 
            type="email" 
            placeholder="Enter your email address" 
            onChange={handleEmailChange} 
            value={email}
          />
        </label>
        <div>
          <h3>Interests</h3>
          <input
            type="checkbox"
            id="art"
            checked={artIsChecked}
            aria-checked={artIsChecked}
            onChange={toggleArt}
          />
          <label htmlFor="art">Art</label>
          <input
            type="checkbox"
            id="music"
            checked={musicIsChecked}
            aria-checked={musicIsChecked}
            onChange={toggleMusic}
          />
          <label htmlFor="music">music</label>
          <input
            type="checkbox"
            id="food"
            checked={foodIsChecked}
            aria-checked={foodIsChecked}
            onChange={toggleFood}
          />
          <label htmlFor="food">food</label>
        </div>
        <button id="submit">submit</button>
      </form>
      
    </main>
  );
}

export default App;
