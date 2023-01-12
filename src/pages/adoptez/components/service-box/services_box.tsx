import { Link } from "react-router-dom"
import { Service } from "../../../../types"

export type ServiceBoxPropsType={
service:Service
}



function ServiceBox(props:ServiceBoxPropsType){
    console.log('CATEGORY BOX PROPS',props)
    return(
        <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-success">
          <div className="card-header py-3 text-white bg-danger border-success">
            <h4 className="my-0 fw-normal">{props.service.name.substring(0,15)}...</h4>
          </div>
          <div className="card-body">
            <h1>{props.service.name}</h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>{props.service.description}...</li>
            </ul>
            <Link to={"/adoptez/service-details/" + props.service.slug} className="w-100 btn btn-lg btn-danger">
                Service Details
            </Link>
          </div>
        </div>
      </div>
    )
}

export default ServiceBox