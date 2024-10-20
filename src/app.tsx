import { FunctionalComponent } from "preact";

const App: FunctionalComponent = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Backoffice Frontend Template
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Built with Preact, Vite, TypeScript, and Tailwind CSS
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get Started
      </button>
    </div>
  );
};

export default App;
