import { useState } from 'react';
import SideBar from '../../components/Sidebar';

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <SideBar isOpen={open} handleMenu={handleMenu} />
      <main>
        <h1>Home</h1>
      </main>
    </>
  );
};

export default Home;
