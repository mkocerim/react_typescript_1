import { useSelector } from "react-redux/es/exports"
import { RootState } from "../../redux/store"
import useApi from "../../hooks/useApi"
import { AxiosResponse } from "axios"
import { Category, setCategories } from "../../redux/categorySlice"
import { useDispatch } from "react-redux/es/hooks/useDispatch"
import CategoryBox from "./components/category-box/categoryBox"

export type AdoptezResponseType<T=any>={
    data?:T,
    status:'success'|'error',
    draw?:number,
    recordsTotal?:number,
    recordsFiltered?:number,
    errorMessage?:string,
    exceptionType?:string
}

function Adoptez(){
    const api= useApi("adoptez")
    const dispatch= useDispatch()

    const categoryState = useSelector((state:RootState)=>{
        console.log("USESELECTOR STATE",state)
        return state.category

    })

    console.log('>>CATEGORIES', categoryState.categories)
    console.log('>>INITIALIZED', categoryState.initialized)

    if(categoryState.initialized===false){

        //TODO burada api isteginde bulun ve kategorileri set et

    api.get<AdoptezResponseType<Category[]>>('public/categories/listMainCategories')
    .then((response:AxiosResponse<AdoptezResponseType<Category[]>>)=>{
        console.log('ADOPTEZ RESPONSE',response.data.data)
       if(response.data.data){
        dispatch(setCategories(response.data.data))

       }
    })

        return(
            <div>
                Loading...
            </div>
        )
    }


    return(
        <div>
            CATEGORIES will be listed
            <hr/>
        <div className={"row"}>
            {
                categoryState.categories.map((item:Category, index:number)=>{
                    return <div className={"col-4"} key={index}>
                        <CategoryBox category={item}/>
                        </div>
                })
            }




        </div>

           
            <pre>{JSON.stringify(categoryState,null,32)}</pre>
        </div>
    )

}

export default Adoptez