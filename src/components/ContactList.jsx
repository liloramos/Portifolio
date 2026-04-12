import { motion } from "motion/react";

function ContactList({ contacts }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <motion.a
          className="contact-item"
          href={contact.href}
          key={contact.label}
          rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
          target={contact.href.startsWith("http") ? "_blank" : undefined}
          transition={{ type: "spring", stiffness: 240, damping: 18 }}
          whileHover={{ y: -6, scale: 1.01 }}
        >
          <strong>{contact.label}</strong>
          <span>{contact.value}</span>
        </motion.a>
      ))}
    </div>
  );
}

export default ContactList;
