import { useState } from 'react';
import PropTypes from 'prop-types';
import editIcon from 'images/edit.svg';
import deleteIcon from 'images/delete.svg';
import s from './CardWithMenu.module.css';

const CardWithMenu = ({ text, onEdit, onDelete }) => {
  const handleEdit = () => {
    onEdit();
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className={s.cardStyles}>
      <button
        className={s.menuItem}
        type="button"
        onClick={handleEdit}
        aria-label="Menu"
      >
        <img src={editIcon} alt="Edit" />
        <p>Edit</p>
      </button>

      <button
        className={s.menuItem}
        type="button"
        onClick={handleDelete}
        aria-label="Menu"
      >
        <img src={deleteIcon} alt="Delete" />
        <p>Delete</p>
      </button>
    </div>
  );
};

CardWithMenu.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CardWithMenu;