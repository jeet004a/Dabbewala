import React,{createContext,useState} from 'react'

export const UserDataContext=createContext()

const UserContext = ({children}) => {
    const [user, setUser] = useState({
        email:'',
        fullname:{
            firstname:'demo',
            lastname:''
        }
    })
  return (
    <div>
        <UserDataContext value={{user,setUser}}>
            {children}
        </UserDataContext>
    </div>
  )
}

export default UserContext