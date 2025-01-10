import "./App.css";
import { useAppSelector } from "./redux/hook";

function App() {
  const { celebrations } = useAppSelector((state) => state.celebration);
  console.log(celebrations);
  return (
    <main className="w-full h-screen bg-green-600">
      <h1>This is Main</h1>
    </main>
  );
}

export default App;
