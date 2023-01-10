import { useState } from "react";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";

export type GeoType = {
  lat: string;
  lng: string;
};

export type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoType;
};
export type CompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};
export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  phone: string;
  webseit: string;
  company: CompanyType;
};

function JsonplaceholderUser() {
  const api = useApi("jsonplaceholder");

  //TODO Buraya gelecek

  const [users, setUsers] = useState<UserType[] | null>(null);

  let userListJsx: any =<>Loading...</> 

  if (users === null) {
    // bu bölge senkron

    //  api.get('users').then().catch() bunun  yerine promise kullanacağız

    // promise için async ihtiyacımız var bu neden le immediate call fucntion

    (async () => {
      //bu bölge asenkrondur

      const apiResult = await api.get<UserType[]>("users");
      console.log("API RESULT ", apiResult);
      setUsers(apiResult.data);
    })();
  } else {
    userListJsx = users.map((item:UserType,index:number) => {
      return( 
    <div key={index}>
        Name : {item.name}
        <br/>
        Username : {item.username}
        <br/>
        Email : {item.email}
        <br/>
        <Link to = {'/jsonplaceholder/user/' + item.id}>
            Open Link Details
        </Link>
        <hr/>

      </div>
      )

    });
  }

  return <div>
    <h2>PLACE HOLDER USER PAGE</h2>
    <hr/>
    {userListJsx}</div>;
}

export default JsonplaceholderUser;
