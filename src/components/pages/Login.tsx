import React, { useState, ChangeEvent } from 'react'

import { Input, PasswordInput } from 'components/atoms'
import { Form } from 'components/molecules'
import { PageLayout } from 'components/templates'

interface FormFields {
  username: string
  password: string
}

const Login = () => {
  const [formFields, setFormFields] = useState<FormFields>({ username: '', password: '' })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist()
    setFormFields(s => ({ ...s, [event.target.name]: event.target.value }))
  }
  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
        <Input
          onChange={handleInputChange}
          name="username"
          type="text"
          value={formFields.username}
          placeholder="Username"
        />
        <PasswordInput
          onChange={handleInputChange}
          name="password"
          type="password"
          value={formFields.password}
          placeholder="Password"
        />
      </Form>
    </PageLayout>
  )
}
export default Login
