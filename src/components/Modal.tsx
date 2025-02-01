"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  description: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  title,
  description,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        {/* Overlay Background */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          aria-hidden="true"
        />

        {/* Modal Content */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-lg rounded-xl bg-white dark:bg-slate-900 p-6 shadow-lg">
            <Dialog.Title className="text-2xl font-bold text-gray-900 dark:text-sky-100">
              {title}
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-gray-700 dark:text-gray-300">
              {description}
            </Dialog.Description>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="mt-4 w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
