import {
  DialogRoot,
  DialogBackdrop,
  DialogPositioner,
  DialogContent,
  DialogBody,
} from '@chakra-ui/react';
import { ModalProps } from './types';
import { SearchModal, FavoritesModal } from './Modals';
import { ModalID } from '@uiStore';

const ModalComponent = ({ isOpen, modalID, onModalClose }: ModalProps) => {
  return (
    <DialogRoot
      open={isOpen}
      onOpenChange={(details: { open: boolean }) => {
        if (!details.open) onModalClose();
      }}
    >
      <DialogBackdrop bg="rgba(0, 0, 0, 0.4)" backdropFilter="blur(10px)" />
      <DialogPositioner>
        <DialogContent
          bg="transparent"
          border="none"
          boxShadow="none"
          maxW="600px"
          width="90vw"
        >
          <DialogBody p={0}>
            <ModalToShow modalID={modalID} />
          </DialogBody>
        </DialogContent>
      </DialogPositioner>
    </DialogRoot>
  );
};

const ModalToShow = ({ modalID }: { modalID: ModalID }) => {
  switch (modalID) {
    case ModalID.SEARCH:
      return <SearchModal />;
    case ModalID.FAVORITES:
      return <FavoritesModal />;
    default:
      return <></>;
  }
};

export default ModalComponent;
