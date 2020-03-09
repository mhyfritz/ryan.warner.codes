import React, { useState, useEffect, useContext } from 'react'
import ComfyJS from 'comfy.js'
import getRandomInt from '../../utilities/getRandomInt'

import * as S from './styles'
import Fireball from './Fireball'
import { store } from '../store.js'

const commands = {
  test: 'test',
  heart: 'heart',
  heal: 'heal',
  fireball: 'fireball',
  hadouken: 'hadouken'
}

ComfyJS.Init('RyanWarnerCodes')

let lasers = []

const addNew = () => {
  const laser = new Fireball({
    x: 0,
    y: getRandomInt(0, 1080),
    angle: getRandomInt(-90, 90),
    velocity: getRandomInt(0, 8),
    index: 1
  })

  lasers.push(laser)
}

const startGame = () => {
  function gameLoop() {
    for (var i = 0; i < lasers.length; i++) {
      var laser = lasers[i]
      const doMovement = laser.doMovement()

      switch (doMovement) {
        case 'delete':
          // dispatch({ type: 'SET_HEALTH', health: state.health - 1 })
          lasers.splice(i, 1)
          break
        case 'hit':
          lasers.splice(i, 1)
          break
      }
    }
  }

  setInterval(gameLoop, 33)

  return <div />
}

startGame()

export default props => {
  const { state, dispatch } = useContext(store)
  const hearts = state.health

  ComfyJS.onCommand = (user, command, message, flags, extra) => {
    if (flags.broadcaster && command === commands.test) {
      console.log('!test was typed in chat')
    }

    switch (command) {
      case commands.heal:
        dispatch({ type: 'SET_HEALTH', health: hearts + 1 })
        break
      case commands.fireball:
      case commands.hadouken:
        dispatch({ type: 'SET_HEALTH', health: hearts - 1 })
        addNew()
        break
    }
  }

  const newArray = Array(hearts).fill().map((x, i) => i)
  return (
    <S.ComfyJSComponent>
      {newArray.map((_, index) => <S.StyledHeart key={index} />)}
    </S.ComfyJSComponent>
  )
}