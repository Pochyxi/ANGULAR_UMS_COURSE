import { UserInterface } from "../interfaces/user";

/**
 * Classe User che implementa l'interfaccia UserInterface.
 * Questa classe rappresenta un utente nel sistema e fornisce una struttura
 * per gestire le informazioni dell'utente in modo coerente.
 */
export class User implements UserInterface {
  // Proprietà della classe User, ciascuna corrispondente a un attributo dell'utente
  id: number | null;        // Identificativo univoco dell'utente, può essere null per nuovi utenti
  name: string;             // Nome dell'utente
  lastname: string;         // Cognome dell'utente
  email: string;            // Indirizzo email dell'utente
  fiscalcode: string;       // Codice fiscale dell'utente (specifico per il sistema italiano)
  province: string;         // Provincia di residenza dell'utente
  phone: string;            // Numero di telefono dell'utente
  age: number;              // Età dell'utente

  /**
   * Costruttore della classe User.
   * @param user - Oggetto opzionale di tipo UserInterface per inizializzare l'istanza
   */
  constructor(user?: UserInterface) {
    // Se non viene fornito un oggetto user, inizializza con valori predefiniti
    if (!user) {
      this.id = null;
      this.name = '';
      this.lastname = '';
      this.email = '';
      this.fiscalcode = '';
      this.province = '';
      this.phone = '';
      this.age = 0;
      return;
    }

    // Se viene fornito un oggetto user, inizializza le proprietà con i valori dell'oggetto
    this.id = user.id;
    this.name = user.name;
    this.lastname = user.lastname;
    this.email = user.email;
    this.fiscalcode = user.fiscalcode;
    this.province = user.province;
    this.phone = user.phone;
    this.age = user.age;
  }
}
