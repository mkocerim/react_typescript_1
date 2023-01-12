import { Link } from "react-router-dom"
import { Blog } from "../../../../types"

export type BlogBoxPropsType={
blog:Blog
}



function BlogBox(props:BlogBoxPropsType){
    console.log('CATEGORY BOX PROPS',props)
    return(
        <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
          <div className="card-header py-3 text-white bg-primary border-primary">
            <h4 className="my-0 fw-normal">{props.blog.title.substring(0,15)}...</h4>
          </div>
          <div className="card-body">
            <h1>{props.blog.title}</h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>{props.blog.content.substring(0,200)}...</li>
            </ul>
            <Link to={"/adoptez/blog-details/" + props.blog.slug} className="w-100 btn btn-lg btn-primary">Blog Details</Link>
          </div>
        </div>
      </div>
    )
}

export default BlogBox