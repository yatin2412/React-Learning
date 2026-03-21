import React, {useState} from "react";
import { useDebounce } from "./CustomDebounce";
const SearchInput = () => {
  const [query, setQuery] = useState("");

  const debouncedSearch = useDebounce({
    fn: (value: string) => {
      console.log("Searching for:", value);
    },
    delay: 500,
  });

  return (
    <input
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
        debouncedSearch(e.target.value);
      }}
      placeholder="Type to search..."
    />
  );
};