import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Start by name (A-Z)" },
          { value: "name-desc", label: "Start by name (Z-A)" },
          { value: "regularPrice-asc", label: "Start by price (low first)" },
          { value: "regularPrice-desc", label: "Start by price (high first)" },
          { value: "maxCapacity-asc", label: "Start by capacity (low first)" },
          {
            value: "maxCapacity-desc",
            label: "Start by capacity (high first)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
