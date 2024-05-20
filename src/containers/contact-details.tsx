import Button from "../components/ui/Button";
import FieldDetail from "../components/ui/FieldDetail";
import { useStorage } from "../storage/context";

const ContactDetailsContainer = () => {
  const { touched, setAction, setContainer } = useStorage();

  const changeToUpdateContactForm = () => {
    setAction("update");
    setContainer("form");
  };

  return (
    <div className="rounded-md shadow-sm bg-white p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg text-slate-700">Contact Details</h2>

        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={changeToUpdateContactForm}>
            Update
          </Button>
          <Button variant="danger">Delete</Button>
        </div>
      </div>

      <hr />

      <div className="space-y-6">
        <FieldDetail label="Name" value={touched?.name || "N/A"} />

        <div className="flex items-start gap-16">
          <FieldDetail label="Email" value={touched?.email || "N/A"} />
          <FieldDetail label="Phone" value={touched?.phone || "N/A"} />
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsContainer;
