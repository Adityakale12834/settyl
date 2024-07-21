// import { ThreeDCardDemo } from "./components/ui/3d-card-demo"
// import { AnimatedPinDemo } from "./components/ui/3d-pin-demo"
import { Button } from "./components/ui/button"
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`;
function App() {

  return (
    <>
      <Button variant="secondary">Hello from aditya</Button>
      <TextGenerateEffect words={words} />
    </>
  )
} 

export default App
