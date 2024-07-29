import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export const Navigation = ({ isOpen, setOpen }) => {
  return (
    <>
      {!isOpen && (
        <FaChevronRight fontSize={12} onClick={() => setOpen(true)} />
      )}
      {isOpen && <FaChevronDown fontSize={12} onClick={() => setOpen(false)} />}
    </>
  );
};
