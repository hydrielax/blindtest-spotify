import swal from "sweetalert"
import logo from "./logo.svg"
import loading from "./loading.svg"
import styles from "./App.module.css"
import Button from "./Button"
import { shuffleArray, getRandomNumber } from "./utils"
import { useState, useEffect } from "react"

// Get token from https://developer.spotify.com/console/get-current-user-saved-tracks/
const apiToken = "BQDx8e6uTN8yL9I9y8OllDpTngBmYLIY_rUOC15VzBUD4BG5ENVMCMaK_DGdh_uBvB8QXJdwDnl13HN5gKmS9Z_lXgHy8EXoYsDPB7-jdwu_GfgDx3ojrFG-l0ZSJnDJr3gkLaKZF1b-GlGVyXUTLLmNCIlyISUHdnVABVJ3kBxr"

const App = () => {
  const [text, setText] = useState("")
  const [tracks, setTracks] = useState({})
  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/tracks", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + apiToken,
      },
    })
      .then(response => response.json())
      .then(data => {
        setTracks(data)
        console.log("Réponse reçue ! Voilà ce que j'ai reçu : ", data)
      })
  }, [])
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1 className={styles.appTitle}>Bienvenue sur le Blindtest</h1>
        <p>Bienvenue sur le jeu de Blind-Test !!! 😍</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{text}</p>
        <button
          onClick={() => {
            setText("Cliqué !!!")
          }}
        >
          Cliquez-moi !
        </button>
        <a className={styles.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
