import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMessage, postMessage } from '../actions/chatActions'
import { CHAT_DOMAIN } from '../lib/helpers'

import styles from './Chat.module.css'

function Chats(props) {
  const [msg, setMsg] = useState('')
  const { chatData, fetchMessage, postMessage } = props

  useEffect(() => {
    fetchMessage(CHAT_DOMAIN)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log(chatData)
  }, [chatData])

  const handleSubmit = event => {
    event.preventDefault()
    postMessage(CHAT_DOMAIN, 'jeff', msg)
    setMsg('')
  }

  const handleChange = event => {
    const target = event.target
    setMsg(target.value)
  }

  const { messages } = chatData.messagesData

  return (
    <div className={styles['chat-app']}>
      <h1>Let's chat</h1>
      <ul className={styles['dialog-block']}>
        {messages
          ? messages.map((msg, index) => {
              return msg['text'] && msg['text'].trim() !== '' ? (
                <li
                  key={index}
                  className={
                    msg['user'] === 'jeff'
                      ? styles['dialog-self']
                      : styles['dialog-other']
                  }
                >
                  <p>{msg['text']}</p>
                </li>
              ) : null
            })
          : null}
      </ul>
      <form className={styles['msg-block']} onSubmit={handleSubmit}>
        <input
          type="text"
          value={msg}
          placeholder="your message"
          onChange={handleChange}
        />
        <button>send</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    chatData: state.chatData
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchMessage: url => dispatch(fetchMessage(url)),
    postMessage: (url, user, text) => dispatch(postMessage(url, user, text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chats)
