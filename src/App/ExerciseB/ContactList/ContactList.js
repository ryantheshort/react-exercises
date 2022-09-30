import { useState } from "react";


const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  address: "",
  telephone: "",
};

function ContactList() {
  const [state, setState] = useState(INITIAL_STATE);
  const [contactList, setContactList] = useState([]);

  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactList([...contactList, state]);
    setState(INITIAL_STATE);
  };

  const contactListHTML = contactList.map((contact, index) => (
    <li key={index}>
      <p>{contact.firstName}</p>
      <p>{contact.lastName}</p>
      <p>{contact.address}</p>
      <p>{contact.telephone}</p>
    </li>
  ));
  return (
    <div className="row">
      <form onSubmit={handleSubmit} className="col-6">
        <h2>Add a new contact</h2>
        <div className="mb-3" controlId="firstName">
          <label>First name</label>
          <input
            type="text"
            placeholder="Enter first name"
            name="firstName"
            value={state.firstName}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3" controlId="lastName">
          <label>Last name</label>
          <input
            type="text"
            placeholder="Enter last name"
            name="lastName"
            value={state.lastName}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3" controlId="address">
          <label>Address</label>
          <input
            type="text"
            placeholder="Enter address"
            name="address"
            value={state.address}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3" controlId="telephone">
          <label>Telephone</label>
          <input
            type="tel"
            placeholder="Enter telephone number"
            name="telephone"
            value={state.telephone}
            onChange={handleInput}
          />
        </div>

        <button variant="primary" type="submit">
          Submit
        </button>
      </form>
      {contactList.length > 0 && <ul className="col-6">{contactListHTML}</ul>}
    </div>
  );
}

export default ContactList;