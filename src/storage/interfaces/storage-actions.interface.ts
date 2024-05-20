import AppContainer from "../types/app-container.type";
import FormAction from "../types/form-action.type";
import Contact from "./contact.interface";

interface StorageActions {
  /**
   * Get the contacts stored in the local storage and set them in the state.
   *
   * @returns {void}
   */
  getContacts: () => void;
  /**
   * Create a new contact and store it in the local storage.
   *
   * @param contact The contact to be created.
   * @returns {void}
   */
  createContact: (contact: Contact) => void;
  /**
   * Update a contact and store it in the local storage.
   *
   * @param contact The contact to be updated.
   * @returns {void}
   */
  updateContact: (contact: Contact) => void;
  /**
   * Deletes a contact from the local storage.
   *
   * @param id The id of the contact to be deleted.
   * @returns {void}
   */
  deleteContact: (id: string) => void;
  /**
   * Set the current action being performed.
   *
   * @param action The new action being performed.
   * @returns {void}
   */
  setAction: (action?: FormAction) => void;
  /**
   * Set the contact being touched to see details or update.
   *
   * @param contact The contact being touched.
   * @returns {void}
   */
  setTouched: (contact?: Contact) => void;
  /**
   * Set the current container being displayed.
   *
   * @param container The new container being displayed.
   * @returns {void}
   */
  setContainer: (container: AppContainer) => void;
}

export default StorageActions;
