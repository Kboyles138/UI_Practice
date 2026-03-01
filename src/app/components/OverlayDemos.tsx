"use client";

import { useState } from "react";
import { Button, Modal, Dialog, Drawer, Popover, Tooltip, Lightbox } from "@/components/ui";

export function OverlayDemos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">Modal</h3>
        <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Modal Title">
          <p className="text-neutral-600 dark:text-neutral-400">Modal content goes here.</p>
        </Modal>
      </div>
      <div>
        <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">Dialog</h3>
        <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          title="Confirm"
          description="Are you sure?"
          onConfirm={() => setDialogOpen(false)}
        />
      </div>
      <div>
        <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">Drawer</h3>
        <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} title="Drawer">
          <p className="text-neutral-600 dark:text-neutral-400">Drawer content.</p>
        </Drawer>
      </div>
      <div>
        <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">Popover</h3>
        <Popover trigger={<Button>Open Popover</Button>}>
          <div className="space-y-1 p-2">
            <p className="text-sm">Popover content</p>
          </div>
        </Popover>
      </div>
      <div>
        <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">Tooltip</h3>
        <Tooltip content="Helpful hint">
          <Button variant="outline">Hover me</Button>
        </Tooltip>
      </div>
      <div>
        <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
          Lightbox
        </h3>
        <Button onClick={() => setLightboxOpen(true)}>Open Lightbox</Button>
        <Lightbox
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          src="/next.svg"
          alt="Sample"
        />
      </div>
    </div>
  );
}
