import './style.css'
import { setupCounter } from './counter.ts'
import helloWorld from './hello-world.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <button class="border-1 border-black" id="counter" type="button"></button>
    </div>
    <div id="hello-world"></div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

helloWorld(document.querySelector<HTMLDivElement>('#hello-world')!)



console.log("it is working!")
