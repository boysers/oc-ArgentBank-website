import { MouseEvent, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SignIn.module.scss'
import { Loader } from '../../components'
import { login } from './authSlice'
import { useDispatch, useSelector } from '../../app/hook'
import { postLogin } from '../../app/api'

export const SignIn: React.FC = () => {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  const rememberMe = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()

  const errorMessage = useSelector((state) => state.profile.errorMessage)
  const dispatch = useDispatch()

  const handleLogin = async (e: MouseEvent) => {
    e.preventDefault()

    if (!email.current?.value || !password.current?.value) {
      setError('Missing email or password')
      return
    } else if (error !== '') setError('')

    const formData = {
      email: email.current?.value,
      password: password.current?.value
    }

    setLoading(true)

    const response = await postLogin(formData)

    setLoading(false)

    if (!response) {
      setError('An error occurred')
      return
    }

    let token = 'myFakeToken'
    token = response.body.token

    if (rememberMe.current?.checked === true) {
      localStorage.setItem('token', token)
    }

    dispatch(login(token))

    navigate('/dashboard/profile')
  }

  useEffect(() => {
    setError(errorMessage)
  }, [errorMessage])

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
        {error && <p className={styles.error}>{error}</p>}
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
