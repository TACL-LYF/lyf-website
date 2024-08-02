import React from "react"
import { TextField, TextFieldProps } from "@mui/material"

type TextFieldWithFormValidationProps = TextFieldProps

export default function TextFieldWithFormValidation({
  required,
  error,
  value,
  ...props
}: TextFieldWithFormValidationProps) {
  const [hasFocused, setHasFocused] = React.useState(false)
  const formValidationError = required && hasFocused && !value

  return (
    <TextField
      required={required}
      error={error || formValidationError}
      value={value ?? ""}
      onBlur={() => setHasFocused(true)}
      {...props}
    />
  )
}
