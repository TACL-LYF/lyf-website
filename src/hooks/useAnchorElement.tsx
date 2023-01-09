import * as React from "react"

type HookReturn = [HTMLElement | null, boolean, (open: boolean) => React.MouseEventHandler, React.Dispatch<React.SetStateAction<HTMLElement | null>>]

export default function useAnchorElement(): HookReturn {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)
  const toggleElement = (open: boolean) => (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(open ? event.currentTarget : null);
  };

  return [
    anchorEl,
    Boolean(anchorEl), // Whether an anchor element is selected.
    toggleElement,
    setAnchorEl
  ]
}
