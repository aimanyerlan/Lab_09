import { VirtualList} from "./components/VirtualList";
import { RegularList } from "./components/RegularList";

function App() {
  return (
    <div>
      <h1>Lab 9.2</h1>

      <h2 style={{ textAlign: "center" }}>Virtualized List (react-window)</h2>
      <VirtualList />

      <hr />

      <h2>Regular List</h2>
      <RegularList />
    </div>
  );
}

export default App;