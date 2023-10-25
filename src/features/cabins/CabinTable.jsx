import styled from "styled-components";

import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useCabins from "./useCabins";
import Table from "../../ui/Table";

function CabinTable() {
  const { cabins, error, isPending } = useCabins();

  if (isPending) return <Spinner />;

  if (error) return <div>에러</div>;

  return (
    <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header>
        <span />
        <span>Cabin</span>
        <span>Capacity</span>
        <span>Price</span>
        <span>Discount</span>
        <span />
      </Table.Header>

      <Table.Body
        data={cabins}
        render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
      />
    </Table>
  );
}

export default CabinTable;
