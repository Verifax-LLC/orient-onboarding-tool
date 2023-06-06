const NavigationBar = () => {
  return (
    <div
      className="navbar h-3 shadow-lg"
      style={{ backgroundColor: "rgb(255, 255, 255)" }}
    >
      <div className="navbar-start">
        <img src="/logo-vfx.png" height="60" width="60" />
        <p className="text-3xl font-medium">Orient</p>
      </div>
    </div>
  );
};

export default NavigationBar;
