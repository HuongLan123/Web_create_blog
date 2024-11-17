import React from "react";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";
import "./Card1.css";

const Card1 = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPiNote }) => {
  return (
    <div className="card1-container">
      <div className="card1-header">
        <h2 className="card1-title">{title}</h2>
        <p className="card1-date">{date}</p>
        <MdOutlinePushPin
          className={`icon-btn ${isPinned ? "pinned" : "unpinned"}`}
          onClick={onPiNote}
        />
      </div>
      <p className="card1-content">{content?.slice(0, 60)}</p>
      <div className="card1-footer">
        <span className="card1-tags">#{tags}</span>
        <div className="icon-group">
          <MdCreate className="icon-btn edit-btn" onClick={onEdit} />
          <MdDelete className="icon-btn delete-btn" onClick={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default Card1;
