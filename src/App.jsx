import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Router } from "./Routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
