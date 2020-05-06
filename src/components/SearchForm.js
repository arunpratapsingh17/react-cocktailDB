import React from "react";

export default function SearchForm({ setSearchTerm }) {
  const searchVal = React.useRef("");
  React.useEffect(() => {
    searchVal.current.focus();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = () => {
    setSearchTerm(searchVal.current.value);
  };
  return (
    <section>
      <h2 className="section-title">search cocktails</h2>
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search for your cocktail</label>
          <input
            type="text"
            ref={searchVal}
            name="name"
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
}
