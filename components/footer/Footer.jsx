import React from 'react'
import classes from './footer.module.css'
const Footer = () => {
  return (
   <footer className={classes.footer}>
    <div className={classes.wrapper}>
        <div className={classes.col}>
            <h2>About the App</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates velit fuga perspiciatis itaque iste, aliquid dignissimos voluptate modi,
                tempore assumenda adipisci dolor hic atque quod consequuntur cupiditate. Quasi, nobis veritatis!
            </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +8801783238741</span>
          <span>Email: sahebbali253@gmail.com</span>
          
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Asia</span>
          <span>Country: Bangladesh</span>
          <span>Current Location: Dhaka, Bangldesh</span>
        </div>
    </div>

   </footer>
  )
}

export default Footer
