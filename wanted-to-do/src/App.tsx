import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./commons/route/AppRouter";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
