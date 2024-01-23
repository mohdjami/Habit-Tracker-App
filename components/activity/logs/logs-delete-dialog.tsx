import * as React from "react"
import { useRouter } from "next/navigation"

import { formatDate } from "@/lib/utils"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckboxWithText } from "@/components/checkbox-with-text"
import { Icons } from "@/components/icons"

interface LogsDeleteDialogProps {
  logDate?: Date
  open: boolean
  onClose: () => void
  onDelete: () => Promise<void>
  isLoading: boolean
}

export function LogsDeleteDialog({
  logDate,
  open,
  onClose,
  onDelete,
  isLoading,
}: LogsDeleteDialogProps) {
  const router = useRouter()

  if (!logDate) {
    return null
  }

  const handleDelete = async () => {
    await onDelete()
    onClose()
    router.refresh()
  }

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Delete logs from {formatDate(logDate.toISOString())}?{" "}
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-auto justify-between">
          <div className="flex justify-center space-x-4 align-middle">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 focus:ring-red-600"
            >
              {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.trash className="mr-2 h-4 w-4" />
              )}
              <span>Delete</span>
            </AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
