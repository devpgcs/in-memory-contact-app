import { useMemo } from "react";
import Input from "../../ui/Input";
import ContactList from "./contact-list";
import Counter from "./counter";
import { useStorage } from "../../../storage/context";
import Contact from "../../../storage/interfaces/contact.interface";

const Sidebar = () => {
  const { contacts, setTouched, setContainer } = useStorage();

  const { emailCount, phoneCount } = useMemo(() => {
    let emailCount = 0;
    let phoneCount = 0;

    for (const contact of contacts) {
      if (contact.email) {
        emailCount++;
      }

      if (contact.phone) {
        phoneCount++;
      }
    }

    return { emailCount, phoneCount };
  }, [contacts]);

  const changeToContactFormDetails = (contact: Contact) => {
    setTouched(contact);
    setContainer("details");
  };

  return (
    <aside className="bg-white min-w-60 shadow-sm min-h-screen border-r border-r-slate-100 p-6 space-y-6">
      <Input placeholder="Search..." />

      <div className="flex gap-2">
        <Counter label="Email" value={emailCount} className="bg-purple-100 flex-1" />
        <Counter label="Phone" value={phoneCount} className="bg-slate-100 flex-1" />
      </div>

      <hr />

      <ContactList contacts={contacts} onContactClick={changeToContactFormDetails} />
    </aside>
  );
};

export default Sidebar;
