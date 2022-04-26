import {useState} from 'react'
import styles from '../../styles/Admin.module.scss'
import { useRouter } from 'next/router';

export default function index() {
  const router = useRouter()
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')

  const submitLogIn = () => {
    if(username == 'admin' && password == 'admin'){
      localStorage.setItem('username', 'admin')
      localStorage.setItem('password', 'admin')
      router.push('/admin/database')
    }
    else{
      alert('Error')
    }
  }
  return (
    <div className={styles.adminPage}>
      <div className={styles.formDiv}>
        <h2>Admin - Log in</h2>
        <div className={styles.form}>
          <div>
            <p>Username</p>
            <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='username' name="username" id="username" />
          </div>
          <div>
            <p>Password</p>
            <input onChange={(e)=>setPassword(e.target.value)} type="Password" placeholder='Password' name="Password" id="Password" />
          </div>
          <button onClick={submitLogIn} className={styles.submitBtn}>Log in</button>
        </div>
      </div>
    </div>
  )
}
