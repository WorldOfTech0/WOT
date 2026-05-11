import { Dialog } from '@chakra-ui/react';
import { ModalProps } from './types';
import { SearchModal } from './Modals';
import { ModalID } from '@uiStore';

const ModalComponent = ({ isOpen, modalID, onModalClose }: ModalProps) => {
  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(details: { open: boolean }) => {
        if (!details.open) onModalClose();
      }}
      placement="center"
      motionPreset="slide-in-bottom"
    >
      <Dialog.Backdrop
        css={{
          bg: modalID === ModalID.SEARCH ? 'rgba(0, 0, 0, 0.4)' : undefined,
          backdropFilter: modalID === ModalID.SEARCH ? 'blur(10px)' : undefined,
        }}
      />
      <Dialog.Positioner>
        <Dialog.Content
          bg="transparent"
          border="none"
          boxShadow="none"
          maxW="2xl"
          w="full"
          p={4}
          position="relative"
        >
          <ModalToShow modalID={modalID} />
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

const ModalToShow = ({ modalID }: { modalID: ModalID }) => {
  switch (modalID) {
    case ModalID.SEARCH:
      return <SearchModal />;
    default:
      return <></>;
  }
};

export default ModalComponent;
