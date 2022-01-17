const NavLink = ({ id, icon, text }) => {
  return (
    <a href={id} className="nav-item">
      {icon} {text}
    </a>
  );
};

export default NavLink;
