import "./App.css";
import Header from "./Pages/Shared/Header";
import { useAppSelector } from "./redux/hook";

function App() {
  const { celebrations } = useAppSelector((state) => state.celebration);
  console.log(celebrations);
  return (
    <main>
      <Header />
      <div></div>
    </main>
  );
}

export default App;
