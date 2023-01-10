import React, { useState } from "react";
import TodoModal from "./components/todo-modal/todo_modal";

export type TodoType = {
  id: number;
  title: string;
  isDone: boolean;
};

function TodoPage() {
  console.log('TODO PAGE RENDER')

const [showTodo, setShowTodo]=useState<boolean>(false)

  // let myNumberList: number[]=[1,2,3]
  // let myTodoList:TodoType[]=[]

  const [todoList, setTodoList] = useState<TodoType[]>([
    {
      id: 1,
      title: "test1",
      isDone: false,
    },
    { id: 2, title: "test 2", isDone: true },
    { id: 3, title: "test 3", isDone: true },
    { id: 4, title: "test 4", isDone: true },
    { id: 5, title: "test 5", isDone: false },
    { id: 6, title: "test 6", isDone: true },
   


  ]);

  return (
    <>
    <TodoModal 
    show={showTodo} 
    onClose={()=>{
      console.log('TODO PAGE ONCLOSE()')
      setShowTodo(false)

    }} 
    onSave={(newTodo:TodoType)=>{
      //burada itedğimiz parametreleri alırız istemediklerimizi almayız

      // örnek kullanım ...  
      // const dizi1:string[]=['foo', 'bar','baz']
      // dizi1.map((data,index)=> {

      // })

      console.log('>>>ONSAVE NEWTODO',newTodo)

      todoList.push(newTodo)
      setTodoList([...todoList])
      setShowTodo(false)
    }}
    />

    <div>
      <div className="row">
        <div className="col-12">
          <button className="btn btn-primary"
          onClick={()=>{
            setShowTodo(true)

          }}
          > New TODO

          </button>
          <table className="table table-stripped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Done</th>
                <th>Title</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todoList.map((item: TodoType, index: number) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>
                      <input
                        type={"checkbox"}
                        checked={item.isDone}
                        onChange={(e) => {
                          console.log(e.target.checked)

                          todoList[index].isDone=e.target.checked

                          console.log(todoList)

//component render olabilmesi icin yeni bir referans ile deger gönderilmesi gerekiyor
                          setTodoList([...todoList])
                        // setTodoList(todoList.map(item=>item)) array distract yöntemiyle ayni özelliklerde

                                      // let user1 = {id:1, name:'test'}
                                      // let user2 = user1
                                      // user2.name='ahmet'
                                      // user1.name===='ahmet'  // true olur 

                        }}
                      />
                    </td>
                    <td> 
                      {
                      
                      item.isDone

                      ?(
                      <span style={{textDecoration:"line-through"}}>
                        {item.title}
                      </span>)
                      :(
                     <>
                      {item.title}
                     </>
                      )
                      
                      } </td>
                    <td>

                      <button
                        type={"button"}
                        className={"btn btn-danger btn-sm"}

                        onClick={() => {
                          console.log(item, index)
                          
                          todoList.splice(index,1)

                         const usage1= todoList.splice(index,0)
                         console.log('USAGE1',usage1)

                        //  const usage2 = todoList.splice(index,1)
                        //  console.log('USAGE2',usage2)                        

                        //  const usage3 = todoList.splice(index,0, {id:99, title:"splice example", isDone:false})
                        //  console.log('USAGE3',usage3)

                        //  const usage4 = todoList.splice(index,0, 
                        //   {id:99, title:"splice example", isDone:false},
                        //   {id:99, title:"splice example", isDone:false},
                        //   {id:99, title:"splice example", isDone:false},
                        //   {id:99, title:"splice example", isDone:false})
                        //  console.log('USAGE4',usage4)
                        //  console.log('LAST LIST',todoList)


                        setTodoList([...todoList])

                        }
                        }
                      >
                        Delete
                      </button>{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
}
export default TodoPage;



