import Contact from "../../../storage/interfaces/contact.interface";

interface ContactsListProps {
  /**
   * List of contacts to display
   */
  contacts: Contact[];
  /**
   * Callback to execute when a contact is clicked
   *
   * @param contact The contact that was clicked
   * @returns {void}
   */
  onContactClick: (contact: Contact) => void;
}

const ContactList = ({ contacts, onContactClick }: ContactsListProps) => {
  if (contacts.length === 0) {
    return <p className="text-center text-slate-700">No contacts found</p>;
  }

  return (
    <ul className="space-y-3">
      {contacts.map((contact) => (
        <li
          key={contact.id}
          className="p-3 hover:bg-slate-100 transition-colors rounded-md"
          onClick={() => onContactClick(contact)}
        >
          <p className="text-slate-700">{contact.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
