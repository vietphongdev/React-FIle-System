import { useState } from "react";
import { FaFileAlt, FaFolder } from "react-icons/fa";
import { Navigation } from "./Navigation";

export const NodeItem = ({ node }) => {
  const [isOpen, setOpen] = useState(false);
  const { name, nodes } = node;

  return (
    <li>
      <span className="expand-icon">
        {nodes?.length > 0 ? (
          <Navigation isOpen={isOpen} setOpen={setOpen} />
        ) : null}
      </span>
      {nodes && (
        <span className="folder-icon">
          <FaFolder color="#0ea5e9" />
        </span>
      )}
      {!nodes && (
        <span className="file-icon">
          <FaFileAlt />
        </span>
      )}
      <span>{name}</span>
      {isOpen && (
        <ul>
          {nodes?.map((node) => (
            <NodeItem key={node.name} node={node} />
          ))}
        </ul>
      )}
    </li>
  );
};
