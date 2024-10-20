import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "./components/ui/button";
import Layout from "./layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex space-x-4 mb-8">
          <a
            href="https://vitejs.dev"
            target="_blank"
            className="hover:opacity-80 transition-opacity"
          >
            <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src={reactLogo}
              className="h-24 w-24 animate-spin-slow"
              alt="React logo"
            />
          </a>
        </div>
        <h1 className="text-4xl font-bold mb-8">Vite + React</h1>
        <div className="p-8 rounded-lg shadow-md flex flex-col items-center bg-muted">
          <Button
            onClick={() => setCount((count) => count + 1)}
            variant="default"
            size="lg"
            className="mb-4"
          >
            count is {count}
          </Button>
          <p className="text-center">
            Edit <code className="p-1 rounded">src/App.tsx</code> and save to
            test
          </p>
        </div>
        <p className="mt-8 text-sm">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </Layout>
  );
}

export default App;
