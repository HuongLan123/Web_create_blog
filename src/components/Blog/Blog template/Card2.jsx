import React, { useState } from "react";
import TagInput from "../Blog template/TagInput.jsx";
import { MdClose } from "react-icons/md";
import './Card2.css'

const Card2 = ({ noteData, type, onClose }) => {
  const [title, setTitle] = useState(noteData?.title || "");
  const [content, setContent] = useState(noteData?.content || "");
  const [tags, setTags] = useState(noteData?.tags || []);
  const [error, setError] = useState(null);

  const addNewNote = async () => {
    try {
      const newNote = { title, content, tags };
      // Thay đổi thành API của bạn hoặc lưu dữ liệu vào cơ sở dữ liệu
      console.log("Submitting new note:", newNote);
      alert("Blog submitted successfully!");
      onClose();
    } catch (err) {
      setError("Failed to submit blog. Please try again.");
    }
  };

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter the title");
      return;
    }
    if (!content) {
      setError("Please enter the content");
      return;
    }
    setError("");
    addNewNote();
  };

  return (
    <div className="card2-modal">
      <button
        className="close-btn"
        onClick={onClose}
        aria-label="Close"
      >
        <MdClose className="text-xl text-gray-400" />
      </button>
      <div className="flex flex-col gap-4">
        <label className="input-label">Title</label>
        <input
          type="text"
          className="text-input"
          placeholder="Enter title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />

        <label className="input-label">Content</label>
        <textarea
          className="textarea-input"
          placeholder="Enter content"
          rows={6}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />

        <label className="input-label">Tags</label>
        <TagInput tags={tags} setTags={setTags} />

        {error && <p className="text-red-500">{error}</p>}

        <button
          className="add-btn"
          onClick={handleAddNote}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default Card2;
