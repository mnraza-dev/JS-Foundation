import React from "react";

const Folder = ({ explorer }) => {
  if (explorer.isFolder) {
    return (
      <div>
        <div
          style={{
            marginTop: "5px",
          }}
        >
          <span>📁 {explorer.name}</span>
        </div>
        {explorer.items.map((exp) => (
          <span key={exp.id}>{exp.name}</span>
        ))}
      </div>
    );
  } else {
    return <span>📄 {explorer.name}</span>;
  }
};

export default Folder;
