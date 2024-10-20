import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "./AddCabin";

import { getCabins } from "../services/apiCabins";
import { useQuery } from "@tanstack/react-query";

function Cabins() {
  const { isPanding } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
        <AddCabin isPanding={isPanding} />
      </Row>
    </>
  );
}

export default Cabins;
