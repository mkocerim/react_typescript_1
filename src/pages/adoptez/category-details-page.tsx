import { AxiosResponse } from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import useApi from "../../hooks/useApi"
import categoryDetailsSlice, { addCategoryDetails } from "../../redux/categoryDetailsSlice"
import { RootState } from "../../redux/store"
import { AdoptezResponseType, CategoryDetails } from "../../types"

export type CategoryDetailsRouteParams= {

    category_slug:string


}


function CategoryDetailsPage () {

    const api=useApi('adoptez')
   const dispatch=useDispatch()



    const params =useParams<CategoryDetailsRouteParams>()

    console.log('>>CATEGORY DETAILS PARAMS',params)

    const categoryDetailsState= useSelector((state:RootState)=>{

        console.log('>> CATEGORY DETAILS USE SELECTOR STATE',state)
        return state.categoryDetails
    })

    categoryDetailsState.categoryDetails.find(item: CategoryDetails)=>{

    }
    
    api.get<AdoptezResponseType<CategoryDetails>>('public/categories/getBySlug/' +params.category_slug)
        .then((response:AxiosResponse<AdoptezResponseType<CategoryDetails>>)=>{

            console.log('>>CATEGORY DETAILS RESP',response)

            if(response.data.data){
            dispatch(addCategoryDetails(response.data.data))
            }
        })



return(
<div>
CATEGORY DETAILS PAGE

</div>
)

}

export default CategoryDetailsPage