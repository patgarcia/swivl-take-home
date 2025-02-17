import ErrorBoundary from "./components/error-boundary";
import { Backdrop } from "./components/ui";
import Navbar from "./components/ui/Nav";
import "./App.css";
import useLocationData from "./hooks/useLocationData";
import LocationListing from "./components/LocationListing";
import { useLocationDataReturnType } from "./hooks/useLocationData.types";
import Loader from "./components/ui/Loader";

function App() {
  const { locationData, loading }: useLocationDataReturnType =
    useLocationData();
  return (
    <ErrorBoundary>
      <Backdrop>
        <header>
          <Navbar />
        </header>
        <main className="flex flex-col flex-grow">
          {loading ? <Loader /> : <LocationListing locations={locationData} />}
        </main>
      </Backdrop>
    </ErrorBoundary>
  );
}

export default App;
