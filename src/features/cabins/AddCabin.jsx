import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>

      {/* <Modal>
        <Modal.Open opens="table">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="table">
          <CreateCabinForm />
        </Modal.Window>
      </Modal> */}
    </>
  );
}

export default AddCabin;
