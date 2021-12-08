import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/"></Link>
      <div
        className="title-header"
        style={{
          color: "white",
          fontSize: "20px",
          border: "20px",
          display: "grid",
          textAlign: "center",

        }}
      >
        <Link to="/new">Make Your Own Jpegmafia Song Title</Link>
      </div>
    </div>
  );
}
