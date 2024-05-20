import { ReactElement } from "react";
import Layout from "./components/layout";
import ContactDetailsContainer from "./containers/contact-details";
import ContactFormContainer from "./containers/contact-form";
import AppContainer from "./storage/types/app-container.type";
import EmptyContainer from "./containers/empty";
import StorageProvider, { useStorage } from "./storage/context";

const SafeApp = () => {
  const { container } = useStorage();

  const containers: Record<AppContainer, ReactElement> = {
    details: <ContactDetailsContainer />,
    form: <ContactFormContainer />,
  };

  return <Layout>{!!container ? containers[container] : <EmptyContainer />}</Layout>;
};

export default function App() {
  return (
    <StorageProvider>
      <SafeApp />
    </StorageProvider>
  );
}
