import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Send from "./pages/send";
import Wallet from "./pages/wallet";
import Send1 from "./pages/send1";
import Wallet1 from "./pages/wallet1";
import Wallet2 from "./pages/wallet2";
import Send2 from "./pages/send2";
import Send3 from "./pages/send3";
import Wallet3 from "./pages/wallet3";
import WalletCreated from "./pages/wallet-created";
import CreatePassword from "./pages/create-password";
import Newimport from "./pages/newimport";
import Welcome from "./pages/welcome";
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
      case "/wallet1":
        title = "";
        metaDescription = "";
        break;
      case "/send":
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
      case "/send1":
        title = "";
        metaDescription = "";
        break;
      case "/send2":
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
      case "/welcome":
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
      <Route path="/wallet1" element={<Wallet />} />
      <Route path="/send" element={<Send1 />} />
      <Route path="/wallet2" element={<Wallet1 />} />
      <Route path="/wallet3" element={<Wallet2 />} />
      <Route path="/send1" element={<Send2 />} />
      <Route path="/send2" element={<Send3 />} />
      <Route path="/wallet" element={<Wallet3 />} />
      <Route path="/wallet-created" element={<WalletCreated />} />
      <Route path="/create-password" element={<CreatePassword />} />
      <Route path="/newimport" element={<Newimport />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}
export default App;
