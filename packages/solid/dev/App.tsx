import { createSignal, type Component } from 'solid-js'
import logo from './logo.svg'
import styles from './App.module.css'
import { Hello } from '../src'
import { Button } from '../src/button'

const App: Component = () => {
  const [disabled, setdisabled] = createSignal(false)
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <h1>
          <Hello></Hello>
        </h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
        <Button disabled={disabled()}>Click me</Button>
        <Button onClick={() => setdisabled(!disabled())}>toggle disabled</Button>
      </header>
    </div>
  )
}

export default App
