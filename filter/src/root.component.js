import React from 'react'
import { Scoped } from 'kremling'
import styles from './root.krem.css'
import { links } from './root.helper.js'
import { Link } from '@reach/router'
import { FiltroForm } from './components/form.component'
export default class Root extends React.Component {

  state = {
    hasError: false
  }

  componentDidCatch (error, info) {
    this.setState({hasError: true})
  }

  render () {
    return (
      <div>
        <FiltroForm></FiltroForm>
      </div>
    )
  }
}
