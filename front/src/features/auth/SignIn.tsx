import { MouseEvent, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SignIn.module.scss'
import { Loader } from '../../components'
import { login, setErrorAuth } from './authSlice'
import { useDispatch, useSelector } from '../../app/hook'
import { postLogin } from './authApi'
import { AxiosError } from 'axios'

export const SignIn: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  const rememberMe = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()

  const errorAuth = useSelector((state) => state.auth.errorAuth)
  const dispatch = useDispatch()

  const handleLogin = async (e: MouseEvent) => {
    e.preventDefault()

    if (!email.current?.value || !password.current?.value) {
      dispatch(setErrorAuth('Missing email or password'))
      return
    } else if (errorAuth !== '') dispatch(setErrorAuth(null))

    const formData = {
      email: email.current?.value,
      password: password.current?.value
    }

    try {
      setLoading(true)

      const response = await postLogin(formData)

      if (response instanceof AxiosError) {
        throw new Error(response.message)
      }

      const token = response.body.token

      if (rememberMe.current?.checked === true) {
        localStorage.setItem('token', token)
      }

      dispatch(login(token))

      navigate('/dashboard/profile')
    } catch (error) {
      console.warn(error)
      dispatch(setErrorAuth('An error occurred'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Email</label>
          <input type="text" id="username" ref={email} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={password} />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" ref={rememberMe} />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {errorAuth && <p className={styles.error}>{errorAuth}</p>}
        {loading && (
          <div className={styles.loaderContainer}>
            <Loader size="small" />
          </div>
        )}
        {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
        {/* <Link to="/dashboard/profile" className="sign-in-button">
          Sign In
        </Link> */}
        <button
          onClick={handleLogin}
          className="sign-in-button"
          disabled={loading}
        >
          Sign In
        </button>
        {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
        {/* <!-- <button className="sign-in-button">Sign In</button> --> */}
        {/* <!--  --> */}
      </form>
    </section>
  )
}
