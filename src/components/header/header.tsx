import React from 'react'
import styles from './header.module.css'
import Button from '../button/button';
type HeaderType ={
  children: React.ReactNode;
}

const Header = ({children}: HeaderType) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{children}</p>
      <Button>Work with us</Button>
    </div>
  )
}

export default Header
