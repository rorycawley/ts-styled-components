import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'

import { Input, PasswordInput, Button, Spinner } from 'components/atoms'
import { Form } from 'components/molecules'
import { PageLayout } from 'components/templates'

interface FormFields {
  username: string
  password: string
}

let timeout: ReturnType<typeof setTimeout>

const Login = () => {
  const [formFields, setFormFields] = useState<FormFields>({ username: '', password: '' })
  const [loading, setLoading] = useState(false)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist()
    setFormFields(s => ({ ...s, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    timeout = setTimeout(() => {
      setLoading(false)
    }, 2000) // if we change page while this timer is going we need to handle this case, using useEffect
  }

  // this runs when component is loaded, then the returned function is run when it's unloaded
  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [])

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input
              onChange={handleInputChange}
              name="username"
              type="text"
              value={formFields.username}
              placeholder="Username"
            />
            <PasswordInput onChange={handleInputChange} type="password" value={formFields.password} />
          </>
        )}
        <Button large type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Button secondary type="button">
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  )
}
export default Login
