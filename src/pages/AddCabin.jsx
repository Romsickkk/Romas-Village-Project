import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Modal from "../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin({ isPanding }) {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       {isPanding || (
//         <Button onClick={() => setIsOpenModal((show) => !show)}>
//           Add new cabin
//         </Button>
//       )}

//       {isOpenModal && (
//         <Modal onCloseModal={setIsOpenModal}>
//           <CreateCabinForm onCloseModal={setIsOpenModal} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
