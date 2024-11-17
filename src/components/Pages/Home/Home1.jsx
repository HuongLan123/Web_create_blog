import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileInfo from "../../Blog/Blog template/ProfileInfo.jsx";
import Search from "../../Search_Bar/Search.jsx";
import Card1 from "../../Blog/Blog template/Card1.jsx";
import { MdAdd } from "react-icons/md";
import Card2 from "../../Blog/Blog template/Card2.jsx";
import Modal from "react-modal";

function Navbar() {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const [active, setActive] = useState("nav__menu");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
  };

  const navToggler = () => {
    setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
  };

  const handleSearch = () => {
    console.log("Search Query:", searchQuery);
  };

  const onClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div>
      {/* Thanh điều hướng */}
      <nav className="nav">
        <Link to="/" className="nav__brand">
          Create New Blog
        </Link>
        <ul className={active}>
          <ProfileInfo onLogout={onLogout} />
        </ul>
        <button className="nav__toggler" onClick={navToggler}>
          ☰
        </button>
      </nav>

      {/* Thanh tìm kiếm */}
      <Search
        value={searchQuery}
        onChange={({ target }) => setSearchQuery(target.value)}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />

      {/* Hiển thị nội dung */}
      <div className="body_post">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <Card1
            title="Meeting on 7th April"
            date="3rd April"
            content="Meeting on 7th April Meeting on 7th April"
            tags="Meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPiNote={() => {}}
          />
        </div>
      </div>

      {/* Nút thêm mới */}
      <button
        className="floating-add-btn"
        onClick={() =>
          setOpenAddEditModal({ isShown: true, type: "add", data: null })
        }
      >
        <MdAdd className="add-icon" />
      </button>

      {/* Modal */}
      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() =>
          setOpenAddEditModal({ ...openAddEditModal, isShown: false })
        }
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="modal-class"
      >
        <Card2
          type = {openAddEditModal.type}
          noteData = {openAddEditModal.data}
          onClose={() => {
            setOpenAddEditModal({ isShown: false, type: "add", data: null });
          }}
        />
      </Modal>
    </div>
  );
}

export default Navbar;
