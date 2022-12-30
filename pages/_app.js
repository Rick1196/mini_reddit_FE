import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { NotificationsContext } from "../components/contexts";
import Navbar from "../components/navigation/navbar";
import initAuth from "../config/initAuth";
import "../styles/globals.css";
initAuth();
const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnMount: false, retry: false } },
});

function MyApp({ Component, pageProps }) {
  //TODO: create a context, setNotifications value will recieve the notification value and a timer, default null to make de notification permanent
  const [{ notifications, setNotifications }] = useState([]);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NotificationsContext.Provider
          value={{ notifications, setNotifications }}
        >
          <Navbar />
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </NotificationsContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
