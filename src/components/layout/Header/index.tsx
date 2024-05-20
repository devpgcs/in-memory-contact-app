import { useStorage } from "../../../storage/context";
import Button from "../../ui/Button";

const Header = () => {
  const { setContainer, setAction, setTouched } = useStorage();

  const changeToCreateContactForm = () => {
    setContainer("form");
    setAction("create");
    setTouched(undefined);
  };

  return (
    <header className="min-h-24 bg-white shadow-sm w-full flex flex-1 items-center justify-between p-6">
      <h1 className="font-semibold text-2xl text-slate-700">Contacts</h1>

      <Button onClick={changeToCreateContactForm}>Add new</Button>
    </header>
  );
};

export default Header;
