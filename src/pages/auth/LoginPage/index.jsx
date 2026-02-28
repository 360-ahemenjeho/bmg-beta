import { Button, Input } from "@/components/ui";
import { spacingTokens } from "@/constants/theme";
import { Stack } from "@mui/material";
import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState(
    /** @type {any} */ ({
      email: "",
      password: "",
    }),
  );

  const [formErrors, setFormErrors] = useState(/** @type {any} */ ({}));

  return (
    <Stack gap={spacingTokens.md}>
      <Input
        label="Email"
        name="email"
        value={(name) => formData[name]}
        onChange={(name, value) => console.log(name, value)}
        onBlur={(name, value) => console.log(name, value)}
        error={(name) => formErrors?.[name]}
      />

      <Input
        label="Password"
        name="password"
        value={(name) => formData[name]}
        onChange={(name, value) => console.log(name, value)}
        onBlur={(name, value) => console.log(name, value)}
        error={(name) => formErrors?.[name]}
      />

      <Button size="large" round={6}>
        Submit
      </Button>
    </Stack>
  );
}
