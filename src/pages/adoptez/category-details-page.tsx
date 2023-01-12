import { AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import  {
  addCategoryDetails,
} from "../../redux/categoryDetailsSlice";
import { RootState } from "../../redux/store";
import { AdoptezResponseType, Blog, CategoryDetails, Service } from "../../types";
import BlogBox from "./components/blog-box/blog_box";
import ServiceBox from "./components/service-box/services_box";

export type CategoryDetailsRouteParams = {
  category_slug: string;
};

function CategoryDetailsPage() {
  const api = useApi("adoptez");
  const dispatch = useDispatch();

  const params = useParams<CategoryDetailsRouteParams>();

  console.log(">>CATEGORY DETAILS PARAMS", params);

  const categoryDetailsState = useSelector((state: RootState) => {
    console.log(">> CATEGORY DETAILS USE SELECTOR STATE", state);
    return state.categoryDetails;
  });

  const existingCategoryDetail: CategoryDetails | undefined =
    categoryDetailsState.categoryDetails.find((item: CategoryDetails) => {
      return item.slug === params.category_slug;
    });

  if (typeof existingCategoryDetail === "undefined") {
    api
      .get<AdoptezResponseType<CategoryDetails>>(
        "public/categories/getBySlug/" + params.category_slug
      )
      .then((response: AxiosResponse<AdoptezResponseType<CategoryDetails>>) => {
        console.log(">>CATEGORY DETAILS RESP", response);

        if (response.data.data) {
          dispatch(addCategoryDetails(response.data.data));
        }
      });

    return <div>Loading...2</div>;
  }

  return (
    <div>
      <h1>Kategori: {existingCategoryDetail.slug}</h1>
      <p>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item"> {existingCategoryDetail.category.description}</li>
          <li className="list-group-item"> <img src={existingCategoryDetail.category.image ? existingCategoryDetail.category.image: 'https://api.adoptez1artisan.com/assets/images/no-image.png'}/></li>

        </ul>
      </p>

      <hr/>
      <h1 className={"text-center"}>Bloglar</h1>
      <div className="row">
       {
        existingCategoryDetail.blogs.map((item:Blog, index)=>{
            return  <div className="col-4" key={index}>
                <BlogBox blog={item}/>
        </div>
        })
       }
      </div>
      <hr/>
      <h1 className={"text-center"}>Servisler</h1>
      <div className="row">
       {
        existingCategoryDetail.services.map((item: Service, index)=>{
            return  <div className="col-4" key={index}>
                <ServiceBox service={item}/>
        </div>
        })
       }
      </div>

      <hr />
      <pre>{JSON.stringify(existingCategoryDetail, null, 2)}</pre>
    </div>
  );
}

export default CategoryDetailsPage;
