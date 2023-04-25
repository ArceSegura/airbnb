import { create } from 'zustand';
import { IModalStore } from '@/interfaces/IModalStore';

interface IRegisterModalStore extends IModalStore {}

const useRegisterModal = create<IRegisterModalStore>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));

export default useRegisterModal;
