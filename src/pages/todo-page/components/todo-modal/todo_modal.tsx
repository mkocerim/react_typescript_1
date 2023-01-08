export type TodoModalPropsType = {
  show: boolean;
  onClose:()=>void
};

function TodoModal(props: TodoModalPropsType) {
    console.log('>>TODO MODAL PROPS',props)
    console.log('>>TODO MODAL RENDER')

  const onClose=()=>{
    //modal kapanirken yapilacaklar burada !!
    console.log('>>>>>TODO MODAL ONCLOSE()')

    props.onClose()

  }
  
  
  
  
    return (
    <>
    {props.show
    ? (<div className="modal-backdrop fade show"></div>)
    :(<></>)
    }
    <div
    // let dizi = ['foo','bar','baz']
    //dizi.join('-')--> "foo-bar-baz"
    //dizi.join(' ')--> "foo bar baz"
   // ["modal","fade","show"].join('') --> "modal fade show"

      onClick={()=>props.onClose()} 
      className={["modal","fade", props.show ? "show" : ''].join(' ')} style={{display:props.show? 'block' : 'none'}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">Modal Content Here</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary mx-2"
              onClick={()=>onClose()}
              
>
              Close
            </button>

            <button 
            type="button" 
            className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default TodoModal;
