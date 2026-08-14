"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { FaTimes } from "react-icons/fa";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/**
 * Product screenshot with a consistent dark-UI border/background treatment
 * and a click-to-expand lightbox, since several of these dashboards carry
 * more detail than is legible at normal page width.
 */
const Screenshot: React.FC<Props> = ({
  src,
  alt,
  width,
  height,
  caption,
  priority,
  sizes = "(min-width: 1024px) 1104px, 100vw",
  className = "",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <figure className={className}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="block w-full cursor-zoom-in overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            sizes={sizes}
            className="w-full h-auto"
          />
        </button>
        {caption && (
          <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {caption}
          </figcaption>
        )}
      </figure>

      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto p-4 sm:p-8">
            <div className="flex min-h-full items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-150"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="relative w-full max-w-6xl">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close expanded screenshot"
                    className="absolute -top-10 right-0 flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
                    Close
                    <FaTimes aria-hidden />
                  </button>
                  <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    sizes="100vw"
                    className="w-full h-auto rounded-lg border border-slate-800"
                  />
                  {caption && (
                    <Dialog.Description className="mt-3 text-center text-sm text-slate-300">
                      {caption}
                    </Dialog.Description>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Screenshot;
