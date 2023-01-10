import { Link } from "react-router-dom"
import { Category } from "../../../../redux/categorySlice"

export type CategoryBoxPropsType={
category:Category
}



function CategoryBox(props:CategoryBoxPropsType){
    console.log('CATEGORY BOX PROPS',props)
    return(
        <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
          <div className="card-header py-3 text-white bg-primary border-primary">
            <h4 className="my-0 fw-normal">{props.category.name}</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">{props.category.status}</h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>{props.category.description}</li>
              <li><img src={props.category.image} style={{width:'100%', height:'250px'}} /></li>
            </ul>
            <Link to={"/adoptez/category-details/" + props.category.id} className="w-100 btn btn-lg btn-primary">Category Details</Link>
          </div>
        </div>
      </div>
    )
}

export default CategoryBox