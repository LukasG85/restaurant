import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FaHips } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'
import styled from 'styled-components'
import { styles } from '../../../utils'

export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <FaHips className="logo" />
        </Link>
        <MdMenu className="toggle-icon" onClick={() => handleNavbar()} />
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 3rem;
  }

  .toggle-icon {
    font-size: 2rem;
    color: ${styles.colors.mainBrown};
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`
