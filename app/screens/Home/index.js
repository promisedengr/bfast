import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { useApp } from 'services/app'
import Utils from 'utils'

import { logOutRequest } from 'store/slices/session'

import { Container, Content, GreetingsMessage, Button } from './styles'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const { viewer } = useApp()

  const handleLogOut = useCallback(() => {
    dispatch(logOutRequest())
  }, [dispatch])

  return (
    <Container>
      <Content>
        <GreetingsMessage mb={6}>
          Welcome, {Utils.UserProfile.formatFullName(viewer.profile)}!
        </GreetingsMessage>
        <Button title="Log out" onPress={handleLogOut} />
      </Content>
    </Container>
  )
}

export { HomeScreen }
