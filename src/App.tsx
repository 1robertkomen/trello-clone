import React from 'react';
import { FC } from "react"
import { Column } from "./Column"
import { Card } from "./card"
import {AppContainer} from "./styles";

export const App : FC = ({children}) => {
  return (
    <AppContainer>
      Introduction to trello
    </AppContainer>
  )
}

