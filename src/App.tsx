import React from 'react';
import { FC } from "react"
import { Column } from "./Column"
import { Card } from "./Card"
import { AddNewItem } from "./AddNewItem"
import {AppContainer} from "./styles";

export const App = () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="In progress">
        <Card text="Create backend in go" />
      </Column>
      <Column text="Done">
        <Card text="Watch the Matrix ressurection" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log}/>
    </AppContainer>
  )
}
