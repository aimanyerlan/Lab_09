import { VirtualList} from "./components/VirtualList";
import { RegularList } from "./components/RegularList";

function App() {
  return (
    <div>
      <h1>Lab9.2</h1>
      <VirtualList />
      <hr />
      <RegularList />
    </div>
  );
}

export default App;