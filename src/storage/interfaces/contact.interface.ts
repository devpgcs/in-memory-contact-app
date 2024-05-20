export default interface Contact {
  /**
   * The unique identifier of the contact.
   */
  id: string;
  /**
   * The name of the contact.
   */
  name: string;
  /**
   * The email of the contact. Required if phone is not provided.
   */
  email?: string;
  /**
   * The phone number of the contact. Required if email is not provided.
   */
  phone?: string;
}
