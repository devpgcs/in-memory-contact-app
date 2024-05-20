import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useStorage } from "../storage/context";
import Contact from "../storage/interfaces/contact.interface";

/**
 * Get initial form with empty values. This is used to reset the form after submission
 * wich will generate a new uuid for the contact id
 *
 * @returns {Contact}
 */
const getInitialForm = (): Contact => ({
  id: uuidv4(),
  name: "",
  email: "",
  phone: "",
});

const ContactFormContainer = () => {
  const { action, touched, createContact, updateContact } = useStorage();

  const [payload, setPayload] = useState(getInitialForm());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPayload((prevPayload) => ({
      ...prevPayload,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!payload.email && !payload.phone) {
      return alert("Email or phone is required");
    }

    if (action === "create") {
      createContact(payload);
      alert("Contact added successfully");

      // Reset the form after submission to add a new contact
      setPayload(getInitialForm());
    } else {
      updateContact(payload);
      alert("Contact updated successfully");
    }
  };

  useEffect(() => {
    if (touched) {
      setPayload(touched);
    } else {
      setPayload(getInitialForm());
    }
  }, [touched]);

  return (
    <div className="bg-white rounded-md p-6 space-y-6">
      <h2 className="font-semibold text-lg text-slate-700">
        {action === "create" ? "Add new contact" : "Update contact"}
      </h2>

      <hr />

      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input label="Name" name="name" onChange={handleChange} value={payload.name} required />

        <div className="flex items-start gap-6">
          <Input label="Email" name="email" onChange={handleChange} value={payload.email} />
          <Input label="Phone" name="phone" onChange={handleChange} value={payload.phone} />
        </div>

        {action === "create" ? (
          <Button className="ml-auto block">Add</Button>
        ) : (
          <Button className="ml-auto block">Update</Button>
        )}
      </form>
    </div>
  );
};

export default ContactFormContainer;
