import { PropsWithChildren, createContext, useCallback, useContext, useEffect, useState } from "react";
import Storage from "./interfaces/storage.interface";
import StorageActions from "./interfaces/storage-actions.interface";
import Contact from "./interfaces/contact.interface";

const StorageContext = createContext({} as Storage & StorageActions);

const useStorage = () => useContext(StorageContext);

const StorageProvider = ({ children }: PropsWithChildren) => {
  {
    const [contacts, setContacts] = useState<Storage["contacts"]>([]);
    const [action, setAction] = useState<Storage["action"]>();
    const [touched, setTouched] = useState<Storage["touched"]>();
    const [container, setContainer] = useState<Storage["container"]>();

    const getContacts: StorageActions["getContacts"] = useCallback(() => {
      const serializedContacts = localStorage.getItem("contacts");

      if (serializedContacts) {
        setContacts(JSON.parse(serializedContacts));
      }
    }, []);

    const createContact: StorageActions["createContact"] = useCallback(
      (newContact: Contact) => {
        setContacts((prevContacts) => {
          const newContacts = [...prevContacts, newContact];
          const serializedContacts = JSON.stringify(newContacts);

          localStorage.setItem("contacts", serializedContacts);

          return newContacts;
        });
      },
      [setContacts]
    );

    const updateContact: StorageActions["updateContact"] = useCallback(
      (updatedContact: Contact) => {
        setContacts((prevContacts) => {
          const updatedContactIndex = prevContacts.findIndex((contact) => contact.id === updatedContact.id);
          const newContacts = [...prevContacts];

          newContacts[updatedContactIndex] = updatedContact;

          const serializedContacts = JSON.stringify(newContacts);

          localStorage.setItem("contacts", serializedContacts);

          return newContacts;
        });
      },
      [setContacts]
    );

    const deleteContact: StorageActions["deleteContact"] = useCallback(
      (id: string) => {
        setContacts((prevContacts) => {
          const newContacts = prevContacts.filter((contact) => contact.id !== id);
          const serializedContacts = JSON.stringify(newContacts);

          localStorage.setItem("contacts", serializedContacts);

          return newContacts;
        });
      },
      [setContacts]
    );

    useEffect(() => {
      console.log("Touched contact", touched);
    }, [touched]);

    useEffect(() => {
      // Initially, we must get the contacts already stored
      getContacts();
    }, [getContacts]);

    return (
      <StorageContext.Provider
        value={{
          contacts,
          action,
          container,
          getContacts,
          createContact,
          updateContact,
          deleteContact,
          setAction,
          setContainer,
          touched,
          setTouched,
        }}
      >
        {children}
      </StorageContext.Provider>
    );
  }
};

export default StorageProvider;
export { useStorage };
