import React from 'react';

function RoleButtons() {
  const handleRoleClick = (role) => {
    // Implement specific actions for each role here
    switch (role) {
      case 'Lender':
        alert('Lender button clicked');
        break;
      case 'Borrower':
        alert('Borrower button clicked');
        break;
      case 'Admin':
        alert('Admin button clicked');
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>Role Selection</h2>
      <button onClick={() => handleRoleClick('Lender')}>Lender</button>
      <button onClick={() => handleRoleClick('Borrower')}>Borrower</button>
      <button onClick={() => handleRoleClick('Admin')}>Admin</button>
    </div>
  );
}

export default RoleButtons;
