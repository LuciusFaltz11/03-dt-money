import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionsModal } from '../NewTransactionModal';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src="/img/logo.svg" alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionsModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};
