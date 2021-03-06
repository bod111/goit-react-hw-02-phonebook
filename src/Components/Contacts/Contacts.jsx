import React from 'react'
import PropTypes from 'prop-types'
import s from './Contacts.module.css'

const Contacts = ({options, onDelete }) => {
  return (
    <ul>
      {options.map((option) => {
        return (
          options.lendth !== 0 && (
            <li className={s.contact} key={option.id}>
              <span>{option.name }: { option.number}</span>
              
              <button className={s.deleteBtn} name={option.id} type="button" onClick={onDelete}>
                Delete
              </button>
            </li>
          )
        );
      })}
    </ul>
  )
}

Contacts.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};

export default Contacts
