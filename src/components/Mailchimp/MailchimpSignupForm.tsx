import React from "react"
import { Typography, Grid2Props } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import addToMailchimp from "gatsby-plugin-mailchimp"

import { TextFieldWithFormValidation } from "@components/Input"
import { AnimatedButtonWithLoading } from "@components/Button"

type MailchimpSignupFormProps = Omit<Grid2Props, "children" | "container">

export default function MailchimpSignupForm({
  ...props
}: MailchimpSignupFormProps) {
  const [email, setEmail] = React.useState("")
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [error, setError] = React.useState<string | null>(null)
  const [msg, setMsg] = React.useState<string | null>(null)
  const invalidState = firstName === "" || lastName === "" || email === ""

  const handleSubmit = React.useCallback(async () => {
    setError(null)
    setMsg(null)

    const { result, msg } = await addToMailchimp(email, {
      FNAME: firstName,
      LNAME: lastName,
    })
    if (result === "error") {
      setError(msg)
    } else {
      setMsg(msg)
    }

  }, [email, firstName, lastName, setError, setMsg])

  return (
    <Grid container spacing={2} justifyContent="center" {...props}>
      <Grid xs={12}>
        <Typography variant="h3" align="center">
          Join our mailing list!
        </Typography>
      </Grid>

      <Grid xs={12}>
        <TextFieldWithFormValidation
          id="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
      </Grid>
      <Grid xs={6}>
        <TextFieldWithFormValidation
          id="first-name"
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          fullWidth
          required
        />
      </Grid>
      <Grid xs={6}>
        <TextFieldWithFormValidation
          id="last-name"
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          fullWidth
          required
        />
      </Grid>
      <Grid xs={12}>
        <AnimatedButtonWithLoading
          asyncOnClick={handleSubmit}
          variant="contained"
          fullWidth
          boopProps={{
            scale: 1.05,
          }}
          disabled={invalidState}
        >
          Subscribe to mailing list
        </AnimatedButtonWithLoading>
      </Grid>
      {error && (
        <Grid>
          <Typography color="error" variant="body1" align="center">
            {error}
          </Typography>
        </Grid>
      )}
      {msg && (
        <Grid>
          <Typography color="tertiary.dark" variant="body1" align="center">
            {msg}
          </Typography>
        </Grid>
      )}
    </Grid>
  )
}
