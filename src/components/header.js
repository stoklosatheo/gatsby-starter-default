import * as React from "react"
import '../styles/Header.css'
import PropTypes from "prop-types"
import { Link } from "gatsby"

function Header() {
  return (
    <div className="header">
      <img src="https://crucialconversations.axelperformance.com/images/logo.svg" alt="Logo Axel Performance" />
      <button>Prendre rendez-vous</button>
    </div>
  )
}

export default Header
