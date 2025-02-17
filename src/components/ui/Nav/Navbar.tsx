import NavItem from "./NavItem";

const navItems = [
  { label: "details" },
  { label: "cortex" },
  { label: "escalations" },
  { label: "sequences" },
  { label: "locations and variables", selected: true },
  { label: "spot.is", unformatted: true },
];

const Navbar = () => {
  return (
    <nav className="px-12 py-4 bg-white drop-shadow-sm">
      <ul className="flex flex-row gap-12 items-center">
        {navItems.map((itemData) => (
          <NavItem key={itemData.label} {...itemData} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
