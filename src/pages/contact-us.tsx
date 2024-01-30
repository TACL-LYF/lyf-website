import React from "react"
import { PageProps } from "gatsby"
import {
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"

// Utils
import getPageTitle from "@utils/getPageTitle"

// Components
import { LinkButton } from "@components/Button"
import { Section } from "@components/Layout"

export const Head = getPageTitle("Contact Us")
export type ContactUsState = {
  name: string
  lastName: string
  email: string
  phoneNumber: string
  personType: string
  subject: string
  body: string
}

const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function ContactUsPage({ data }: PageProps) {
  const [state, setState] = React.useState<ContactUsState>({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    personType: "",
    subject: "",
    body: "",
  })

  const [submitContent, setSubmitContent] = React.useState(
    <Button type="submit" color="tertiary" variant="contained" fullWidth>
      <b>Submit</b>
    </Button>
  )

  const handleChange = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement
    setState({ ...state, [target.name]: target.value })
  }

  const handleSubmit = (event: React.FormEvent) => {
    setSubmitContent(<CircularProgress color="primary" />)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state }),
    })
      .then(() => {
        setSubmitContent(
          <Typography variant="h6" align="center" color="success">
            Success! Thank you for your message!
          </Typography>
        )
      })
      .catch((error) => {
        setSubmitContent(
          <Typography variant="h6" color="error" align="center">
            Failed to send message! {error}
          </Typography>
        )
      })

    event.preventDefault()
  }
  // console.log(state)
  return (
    <>
      {/* Header */}
      <Section>
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          alignItems="stretch"
          spacing={2}
          sx={{ padding: 4 }}
        >
          {/* Header text */}
          <Grid
            container
            xs={12}
            md={8}
            sx={{ paddingBottom: 6 }}
            justifyContent="center"
          >
            <Grid xs={12} md={12}>
              <Typography variant="h6" color="black" textAlign="center">
                Have questions?
              </Typography>
            </Grid>

            <Grid xs={12} md={12}>
              <Typography variant="h3" color="black" textAlign="center">
                Contact us
              </Typography>
            </Grid>

            <Grid xs={12} md={8}>
              <Grid>
                <Typography
                  variant="subtitle1"
                  color="black"
                  textAlign="center"
                >
                  We're thrilled to hear from you and answer any questions you
                  may have about our Taiwanese American Summer Camp! Feel free
                  to reach out to our team below:
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <form
            onSubmit={handleSubmit}
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            {/* Text fields */}
            <Grid
              container
              xs={12}
              md={12}
              spacing={1}
              justifyContent="center"
              alignItems="stretch"
            >
              <Grid xs={12} md={8}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  color="tertiary"
                  value={state.name}
                  name="name"
                  onChange={handleChange}
                  required
                  // onChange={(event) => setname(event.target.value)}
                />
              </Grid>

              <Grid xs={12} md={8}>
                <TextField
                  fullWidth
                  id="outlined-required"
                  label="Email"
                  variant="outlined"
                  color="tertiary"
                  value={state.email}
                  name="email"
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid xs={12} md={8}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Phone number"
                  variant="outlined"
                  color="tertiary"
                  value={state.phoneNumber}
                  name="phoneNumber"
                  onChange={handleChange}
                  type="tel"
                />
              </Grid>

              {/* Radio group */}
              <Grid xs={12} md={8}>
                <TextField
                  id="person-type"
                  name="personType"
                  label="Which best describes you?"
                  color="tertiary"
                  required
                  fullWidth
                  select
                  value={state.personType}
                  onChange={handleChange}
                >
                  {["Parent", "Camper", "Donor", "Organization", "Other"].map(
                    (option) => (
                      <MenuItem key={`person-type-${option}`} value={option}>
                        {option}
                      </MenuItem>
                    )
                  )}
                </TextField>
              </Grid>

              {/* Subject + message + button */}

              <Grid xs={12} md={8}>
                <TextField
                  fullWidth
                  id="outlined-static"
                  label="Subject"
                  color="tertiary"
                  value={state.subject}
                  name="subject"
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid xs={12} md={8}>
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  color="tertiary"
                  value={state.body}
                  name="body"
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid md={8}>{submitContent}</Grid>
            </Grid>
          </form>
        </Grid>
      </Section>
    </>
  )
}
