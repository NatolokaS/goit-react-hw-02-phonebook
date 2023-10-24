import css from './ContactsItem.module.css';
export const ContactsItem = ({contact, del}) =>{
	return(
		<li className={css.contactsItem} >
			<span>{contact.name}:</span>
	 		<span className={css.telephone}>{contact.phone}</span>
	 		<button type="button" className={css.deleteButton} onClick={del}>Delete</button>
	 	</li>
	)
}