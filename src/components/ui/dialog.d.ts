declare module "@/components/ui/dialog" {
  import * as React from 'react';

  interface DialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
  }

  interface DialogContentProps {
    children: React.ReactNode;
    className?: string;
  }

  export const Dialog: React.FC<DialogProps>;
  export const DialogContent: React.FC<DialogContentProps>;
  export const DialogDescription: React.FC<{ children: React.ReactNode }>;
  export const DialogHeader: React.FC<{ children: React.ReactNode }>;
  export const DialogTitle: React.FC<{ children: React.ReactNode }>;
  export const DialogTrigger: React.FC<{ children: React.ReactNode }>;
}