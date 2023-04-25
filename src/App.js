import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Send from "./pages/Send";
import Wallet from "./pages/Wallet";
import Send1 from "./pages/Send1";
import Wallet1 from "./pages/Wallet1";
import Wallet2 from "./pages/Wallet2";
import Send2 from "./pages/Send2";
import Send3 from "./pages/Send3";
import Wallet3 from "./pages/Wallet3";
import WalletCreated from "./pages/WalletCreated";
import CreatePassword from "./pages/CreatePassword";
import Newimport from "./pages/Newimport";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/send":
        title = "";
        metaDescription = "";
        break;
      case "/wallet1":
        title = "";
        metaDescription = "";
        break;
      case "/send1":
        title = "";
        metaDescription = "";
        break;
      case "/wallet2":
        title = "";
        metaDescription = "";
        break;
      case "/wallet3":
        title = "";
        metaDescription = "";
        break;
      case "/send2":
        title = "";
        metaDescription = "";
        break;
      case "/send3":
        title = "";
        metaDescription = "";
        break;
      case "/wallet":
        title = "";
        metaDescription = "";
        break;
      case "/wallet-created":
        title = "";
        metaDescription = "";
        break;
      case "/create-password":
        title = "";
        metaDescription = "";
        break;
      case "/newimport":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/send" element={<Send />} />
      <Route path="/wallet1" element={<Wallet />} />
      <Route path="/send1" element={<Send1 />} />
      <Route path="/wallet2" element={<Wallet1 />} />
      <Route path="/wallet3" element={<Wallet2 />} />
      <Route path="/send2" element={<Send2 />} />
      <Route path="/send3" element={<Send3 />} />
      <Route path="/wallet" element={<Wallet3 />} />
      <Route path="/wallet-created" element={<WalletCreated />} />
      <Route path="/create-password" element={<CreatePassword />} />
      <Route path="/newimport" element={<Newimport />} />
    </Routes>
  );
}
export default App;
