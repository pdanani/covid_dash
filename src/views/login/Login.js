import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CNavLink,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
const Login = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const onUserChange = (event) => {
    setUsername(event.target.value)
  }
  const onPassChange = (event) => {
    setPassword(event.target.value.trim())
  }
  console.log(localStorage.getItem('auth'))
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <p className="text-medium-emphasis">Hint: demo demo</p>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                        onChange={onUserChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={onPassChange}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CNavLink
                          to="/dashboard"
                          component={NavLink}
                          activeClassName="active"
                          disabled={!(username === 'demo' && password === 'demo')}
                          onClick={() =>
                            username === 'demo' && password === 'demo'
                              ? sessionStorage.setItem('auth', 1)
                              : null
                          }
                        >
                          <CButton color="primary" className="px-4">
                            Login
                          </CButton>
                        </CNavLink>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
