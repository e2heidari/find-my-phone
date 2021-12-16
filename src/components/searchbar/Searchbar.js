import React, { useState } from "react";
import { SearchBox, ListContainer } from "./styled";
import { useHistory } from "react-router-dom";

const Searchbar = ({ phones }) => {
  const history = useHistory();
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
  const onClick = (e) => {
    const phoneSlected = e.currentTarget.innerText;
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(phoneSlected);
    const finalChoose = phones.filter(
      (phone) => phone.brandName === phoneSlected
    );
    console.log(finalChoose);
    history.push({
      pathname: "/result",
      search: `?idPhone=${finalChoose[0].id}`,
    });
  };

  return (
    <SearchBox>
      <input
        type="text"
        placeholder="Search your phone..."
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button />
      <ListContainer>
        {isShow && input ? (
          filtered.length ? (
            <ul>
              {filtered.map((phonesName) => {
                return (
                  <li key={phonesName} onClick={onClick}>
                    {phonesName}
                  </li>
                );
              })}
            </ul>
          ) : (
            <div>
              <em>Not found</em>
            </div>
          )
        ) : null}
      </ListContainer>
    </SearchBox>
  );
};
export default Searchbar;
