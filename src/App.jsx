import UserContext from "./context/AccountContext";
import Views from "./route/Views";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UserContext>
        <Views />
        <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
      </UserContext>
    </QueryClientProvider>
  );
}

export default App;
