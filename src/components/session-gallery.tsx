"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { sessions } from "./content";

function Lightbox({
  index,
  setIndex,
  close,
}: {
  index: number;
  setIndex: (i: number) => void;
  close: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const photo = sessions[index];
  const step = (d: number) =>
    setIndex((index + d + sessions.length) % sessions.length);
  useEffect(() => {
    const element = dialog.current;
    const active = document.activeElement as HTMLElement | null;
    element?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
      element?.close();
      active?.focus();
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="video-dialog lightbox"
      aria-label="Session photo"
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") step(1);
        if (e.key === "ArrowLeft") step(-1);
      }}
    >
      <div className="dialog-head">
        <h2>
          {index + 1} / {sessions.length}
        </h2>
        <button
          className="icon-button"
          onClick={close}
          aria-label="Close photo"
        >
          <X />
        </button>
      </div>
      <div className="lightbox-frame">
        <Image
          key={photo.image}
          src={`/images/sessions/${photo.image}`}
          alt={photo.alt}
          width={photo.w}
          height={photo.h}
          sizes="(max-width: 1000px) 92vw, 1000px"
        />
      </div>
      <div className="lightbox-foot">
        <p>{photo.alt}</p>
        <div>
          <button
            className="icon-button"
            onClick={() => step(-1)}
            aria-label="Previous photo"
          >
            <ArrowLeft />
          </button>
          <button
            className="icon-button"
            onClick={() => step(1)}
            aria-label="Next photo"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default function SessionGallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <div className="session-grid">
        {sessions.map((photo, i) => (
          <button
            key={photo.image}
            className="session-photo"
            onClick={() => setOpen(i)}
            aria-label={`Enlarge photo: ${photo.alt}`}
          >
            <Image
              src={`/images/sessions/${photo.image}`}
              alt={photo.alt}
              width={photo.w}
              height={photo.h}
              sizes="(max-width: 600px) 50vw, (max-width: 1100px) 33vw, 25vw"
            />
          </button>
        ))}
      </div>
      {open !== null && (
        <Lightbox index={open} setIndex={setOpen} close={() => setOpen(null)} />
      )}
    </>
  );
}
