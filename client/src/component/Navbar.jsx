import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/"></Link>
      <div className="title-header">
        <Link
          style={{
            fontSize: "30px",
            color: "orange",
          }}
          to="/new">Make Your Own Jpegmafia Song Title</Link>
      </div>
    </div>
  );
}
