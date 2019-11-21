import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/usersActinos'
import { URL } from '../lib/helpers'

function Users(props) {
  const { usersData, fetchUsers } = props

  useEffect(() => {
    fetchUsers(URL)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>users</h1>
      <ul>
        {usersData.users.map(user => {
          return (
            <li key={user.id}>
              <p>{user.name}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    usersData: state.usersData
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: url => dispatch(fetchUsers(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
