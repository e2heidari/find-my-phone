import React, { useState } from "react";
import { SearchBox } from "./styled";

const Searchbar = ({ phones }) => {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");

  const onChange = (e) => {
    const phonesName = phones.map((phone) => phone.brandName);
    const input = e.currentTarget.value;
    const newFilteredPhonesName = phonesName.filter(
      (phonesName) => phonesName.toLowerCase().indexOf(input.toLowerCase()) > -1
    );
    setActive(0);
    setFiltered(newFilteredPhonesName);
    setIsShow(true);
    setInput(e.currentTarget.value);
  };
  const onClick = (e) => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(e.currentTarget.innerText);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // enter key
      setActive(0);
      setIsShow(false);
      setInput(filtered[active]);
    } else if (e.keyCode === 38) {
      // up arrow
      return active === 0 ? null : setActive(active - 1);
    } else if (e.keyCode === 40) {
      // down arrow
      return active - 1 === filtered.length ? null : setActive(active + 1);
    }
  };
  const renderSearchbar = () => {
    if (isShow && input) {
      if (filtered.length) {
        return (
          <ul className="autocomplete">
            {filtered.map((phonesName, index) => {
              let className;
              if (index === active) {
                className = "active";
              }
              return (
                <li className={className} key={phonesName} onClick={onClick}>
                  {phonesName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <div className="no-autocomplete">
            <em>Not found</em>
          </div>
        );
      }
    }
    return <></>;
  };
  return (
    <SearchBox>
      <input
        type="text"
        placeholder="Search..."
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button />
      <div>{renderSearchbar()}</div>
    </SearchBox>
  );
};
export default Searchbar;
