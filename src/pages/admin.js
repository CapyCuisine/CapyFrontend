import React, { useState } from 'react';
import '../styles/Admin.css';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import CreateRecette from '../components/CreateRecette'; 
import EditRecette  from '../components/EditRecette';

const Admin = () => {
  const [showCreateRecette, setShowCreateRecette] = useState(false);
  const [showEditRecette, setShowEditRecette] = useState(false);


  const handleAddClick = () => {
    setShowCreateRecette(true);
    setShowEditRecette(false);
  };

  const handleEditClick = () => {
    setShowEditRecette(true);
    setShowCreateRecette(false);
  };


  return (
    <div className="admin-container">
      <div className="admin-navbar">
        <div className="nav-block" onClick={handleAddClick}><AddIcon /></div>
        <div className="nav-block" onClick={handleEditClick}><EditIcon /></div>
      </div>

      <div className="content">
        {showCreateRecette && <CreateRecette />}
        {showEditRecette && <EditRecette />}
      </div>
    </div>
  );
};

export default Admin;
