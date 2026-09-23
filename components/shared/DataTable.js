import React, { useMemo, useState } from "react";

// A small, dependency-free replacement for mdbreact's <MDBDataTable>,
// styled to match the rest of the app. Accepts the same
// `data={{ columns, rows }}` shape so it's a drop-in swap.
const DataTable = ({ data, emptyLabel = "No records found." }) => {
  const { columns = [], rows = [] } = data || {};

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({ field: null, direction: "asc" });

  const filteredRows = useMemo(() => {
    let result = rows;

    if (search.trim()) {
      const term = search.trim().toLowerCase();
      result = result.filter((row) =>
        columns.some((col) => {
          const value = row[col.field];
          return (
            (typeof value === "string" || typeof value === "number") &&
            String(value).toLowerCase().includes(term)
          );
        })
      );
    }

    if (sort.field) {
      result = [...result].sort((a, b) => {
        const aVal = a[sort.field];
        const bVal = b[sort.field];
        if (aVal === bVal) return 0;
        const comparison = aVal > bVal ? 1 : -1;
        return sort.direction === "asc" ? comparison : -comparison;
      });
    }

    return result;
  }, [rows, search, sort, columns]);

  const toggleSort = (field, sortable) => {
    if (!sortable) return;
    setSort((prev) =>
      prev.field === field
        ? { field, direction: prev.direction === "asc" ? "desc" : "asc" }
        : { field, direction: "asc" }
    );
  };

  return (
    <div className="data-table">
      <div className="data-table__toolbar">
        <input
          type="search"
          className="form-control data-table__search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-responsive">
        <table className="data-table__table">
          <thead>
            <tr>
              {columns.map((col) => {
                const sortable = col.sort !== "disabled";
                const isActive = sort.field === col.field;
                return (
                  <th
                    key={col.field}
                    onClick={() => toggleSort(col.field, sortable)}
                    className={sortable ? "is-sortable" : ""}
                  >
                    {col.label}
                    {sortable && (
                      <i
                        className={`fa ml-1 ${
                          isActive
                            ? sort.direction === "asc"
                              ? "fa-sort-asc"
                              : "fa-sort-desc"
                            : "fa-sort text-muted"
                        }`}
                        aria-hidden="true"
                      ></i>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {filteredRows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="text-center text-muted py-4">
                  {emptyLabel}
                </td>
              </tr>
            ) : (
              filteredRows.map((row, i) => (
                <tr key={row.id || i}>
                  {columns.map((col) => (
                    <td key={col.field}>{row[col.field]}</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
