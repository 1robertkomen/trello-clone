import { createContext,useContext,FC} from 'react'

const AppStateContext = createContext<AppStateContextProps({} as AppStateContextProps)

const appData : AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [ { id : "c0", text : "Implement MVVM for searching and selecting trucks"} ]
    },
    {
      id: "1",
      text: "Done",
      tasks: [ { id : "c2", text : "Begin to do serious TDD in go and typescript"} ]
    }
  ]
}

type Task = {
  id : string
  text : string
}

type List = {
  id : string
  text: string
  tasks: Task[]
}

export type AppState = {
  lists : List[]
}

type AppStateContextProps = {
  lists : List[]
  getTaskByListId(id : string) : Task[]
}



// Create the provider component
export const AppStateProvider : FC = ({children}) => {
  const { list } = appData

  const getTaskByListId = (id : string) => {
    return lists.find((list) => list.id === id)?.tasks || []
  }

  return (
    <AppStateContext.Provider values={lists,getTaskByListId}>
      {children}
    </AppStateContext.Provider>

  )
}

