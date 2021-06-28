import { Input } from "antd";

const { Search } = Input;

const SearchInput = ({ setSearch }) => {
  const onSearch = (value) => {
    setSearch(value);
    console.log(value);
  };

  return (
    <Search
      placeholder="Search by name.. "
      allowClear
      size="large"
      onChange={(e) => onSearch(e.target.value)}
      style={{ width: 900 }}
    />
  );
};

export default SearchInput;
