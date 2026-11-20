import { useReducer } from 'react'
import users from '../../assets/json/user.json'
import { reducerFn } from './user.list.page.action'

export default function UserList(){

    const [userList,dispatch] = useReducer(reducerFn,users)

    return (
        <>
            <div className="container"> 
               <div className="h4 text-center text-primary text-uppercase">user list applicaiton</div>
               <div >
                  {(userList && userList.length !=0) ? (
                     userList.map((value,key)=>{
                        return(
                            <div className="card mt-3" key={key}>
                                <div className="card-title">{value.name}</div>
                                <div className="card-title">{value.course}</div>
                                <div>
                                    <button onClick={() => dispatch({type:"update-user",userid:key})}>update</button>
                                    <button onClick={() => dispatch({type:"remove-user",userid:key})}>delete</button>
                                </div>
                            </div>
                        )
                     })
                  ) : (
                    <div className="text-danger h3 text-uppercase">currently no users avaialble</div>
                  )}
               </div>
               <div>
                 <button onClick={()=> dispatch({type:"add-user"})}>Add user</button>
               </div>
            </div>
        
        </>
    )
}