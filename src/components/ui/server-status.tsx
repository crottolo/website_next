"use client";

import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ServerStatusProps {
  isError: boolean;
  errorMessage?: string;
}

export function ServerStatus({ isError, errorMessage }: ServerStatusProps) {
  if (!isError) return null;

  return (
    <Alert variant="destructive" className="mb-6">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Server Connection Error</AlertTitle>
      <AlertDescription>
        {errorMessage || "Unable to connect to Odoo server. Please check your connection and try again."}
      </AlertDescription>
    </Alert>
  );
} 