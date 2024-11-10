import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <center>
        <Link to="/home">Home</Link>|
        <Link to="/insert">Insert</Link>|
        <Link to="/display">Display</Link>
        <hr size="4" color="red" />
        <Outlet />
        <hr size="4" color="red" />
        www.company.com
      </center>
    </>
  );
};

export default Layout;
