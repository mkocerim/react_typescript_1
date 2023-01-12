
export type AdoptezResponseType<T=any>={
    data?:T,
    status:'success'|'error',
    draw?:number,
    recordsTotal?:number,
    recordsFiltered?:number,
    errorMessage?:string,
    exceptionType?:string
}
export type ID={
    id:number
}

export type Timestamp={
    created_at:string,
    updated_at:string, 
}

export type Category= Timestamp & ID & {
    parent_id:number|null,
    name:string,
    slug:string,
    description:string,
    image:string|null,
    status:string,
    
}


export type CategoryDetails={
    slug:string,
    category:Category & {
        children:Category[]
    }
    blogs:Blog[]
    services:Service[]
}

export type Blog= ID & Timestamp & {
    title:string,
    slug:string,
    image:string,
    content:string,
    status:string
    categories?: Category[]
}

export type  Service=ID & Timestamp & {
    category_id:number,
    name:string,
    slug:string,
    description:string,
    image:string|null,
    comission_price:number,
    currency:'EUR'|'USD'|'TRY'|'GBP',
    steps:any,
    status:'active'|'passive' 

}
