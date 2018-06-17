import React from "react";
import EventForm from "./EventForm";
import FlashMessages from "./FlashMessages";

const App = () => (
  <div className='app'>
    <FlashMessages />
    <EventForm />
  </div>
);

export default App;
