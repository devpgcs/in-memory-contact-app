import AppContainer from "../types/app-container.type";
import FormAction from "../types/form-action.type";
import Contact from "./contact.interface";

export default interface Storage {
  /**
   * The contacts stored in the local storage.
   */
  contacts: Contact[];
  /**
   * The current action being performed.
   */
  action?: FormAction;
  /**
   * The contact being touched to see details or update.
   */
  touched?: Contact;
  /**
   * The current container being displayed.
   */
  container?: AppContainer;
}
