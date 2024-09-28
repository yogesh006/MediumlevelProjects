import React, { useState, useMemo } from "react";

// Sample data
const sampleData = [
  { id: 1, name: "Alice", age: 25, city: "New York" },
  { id: 2, name: "Bob", age: 30, city: "Los Angeles" },
  { id: 3, name: "Charlie", age: 22, city: "Chicago" },
  { id: 4, name: "David", age: 35, city: "Houston" },
  { id: 5, name: "Eve", age: 28, city: "Miami" },
];

const DynamicTable = () => {
  const [data, setData] = useState(sampleData);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [filter, setFilter] = useState("");

  // Sorting function
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Memoized sorted data
  const sortedData = useMemo(() => {
    let sortableData = [...data];
    if (sortConfig.key !== "") {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  // Filtered and sorted data
  const filteredData = useMemo(() => {
    if (filter === "") return sortedData;
    return sortedData.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, sortedData]);

  return (
    <div>
      <h1>Dynamic Table with Sorting and Filtering</h1>
      
      {/* Filter input */}
      <input
        type="text"
        placeholder="Filter by any field..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      {/* Table */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>
              ID {sortConfig.key === "id" && (sortConfig.direction === "ascending" ? "🔼" : "🔽")}
            </th>
            <th onClick={() => handleSort("name")}>
              Name {sortConfig.key === "name" && (sortConfig.direction === "ascending" ? "🔼" : "🔽")}
            </th>
            <th onClick={() => handleSort("age")}>
              Age {sortConfig.key === "age" && (sortConfig.direction === "ascending" ? "🔼" : "🔽")}
            </th>
            <th onClick={() => handleSort("city")}>
              City {sortConfig.key === "city" && (sortConfig.direction === "ascending" ? "🔼" : "🔽")}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
