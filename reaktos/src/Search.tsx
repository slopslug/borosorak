import { useState } from "react";

type SearchResult = {
  index: number;
  content: string;
};

const data: SearchResult[] = [
  { index: 1, content: "apple" },
  { index: 2, content: "banana" },
  { index: 3, content: "cherry" },
  { index: 4, content: "date" },
  { index: 5, content: "elderberry" },
];

function Search() {
  const [query, setQuery] = useState("");

  const result = data.filter((item) =>
    item.content
      .toLowerCase()
      .includes(query.toLowerCase()),
  );

  return (
    <div>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search..."
      />
      <ul>
        {result.map((res) => (
          <li key={res.index}>{res.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
