import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./component/Portfolio";
import ContactForm from "./components/Contact";

function App() {
  const [categories] = useState([
    {
      name: "Full Stack Developer",
      description:
        
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  // This prevents the contact form from showing when a user initially navigates to the homepage.
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
