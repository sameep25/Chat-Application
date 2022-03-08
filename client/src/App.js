// components
import Messanger from "./components/Messanger";
import AccountProvider from "./context/AccountProvider";
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <UserProvider>
      <AccountProvider>
        <Messanger />
      </AccountProvider>
    </UserProvider>
  );
}

export default App;
