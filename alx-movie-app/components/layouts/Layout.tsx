import React from 'react';
import Header from './Header';
import Footer from './Footer';

// Define props for the Layout component
interface LayoutProps {
  children: React.ReactNode;
}

/**
 * The main layout wrapper that includes the header and footer.
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;