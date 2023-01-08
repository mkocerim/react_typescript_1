import { FormEvent, useRef, useState } from "react";
import { TodoType } from "../../todo_page";

export type TodoModalPropsType = {
  show: boolean;
  onClose: () => void;
};

function TodoModal(props: TodoModalPropsType) {
  console.log(">>TODO MODAL PROPS", props);
  console.log(">>TODO MODAL RENDER");

  const [inputId, setInputId] = useState<number>(0);
  const inputTodoRef = useRef<HTMLTextAreaElement>(null);
  const isDoneRef = useRef<HTMLInputElement>(null);
  // inputTodoRef.current

  const onClose = () => {
    //modal kapanirken yapilacaklar burada !!
    console.log(">>>>>TODO MODAL ONCLOSE()");

    props.onClose();
  };

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if((inputTodoRef.current === null) || (isDoneRef.current === null)) {
      return
    }

    const inputFormData: TodoType={

      id:inputId,
      title:inputTodoRef.current.value,
      isDone:isDoneRef.current.checked
    
    }

    console.log('>>>INPUT ID',inputId)
    console.log('>>>INPUT TODO REF',inputTodoRef.current.value)
    console.log('ISDONE REF CURRENT CHECKED',isDoneRef.current.checked)
    console.log('ISDONE REF CURRENT VALUE',isDoneRef.current.value)

  };

  return (
    <>
      {props.show ? <div className="modal-backdrop fade show"></div> : <></>}

      <form onSubmit={onFormSubmit}>
        <div
          // let dizi = ['foo','bar','baz']
          //dizi.join('-')--> "foo-bar-baz"
          //dizi.join(' ')--> "foo bar baz"
          // ["modal","fade","show"].join('') --> "modal fade show"

          className={["modal", "fade", props.show ? "show" : ""].join(" ")}
          style={{ display: props.show ? "block" : "none" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Todo From
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => onClose()}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">ID</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="ENTER ID"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      console.log(typeof event.target.value);
                      console.log(typeof parseInt(event.target.value));

                      setInputId(parseInt(event.target.value));
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Todo Content</label>
                  <textarea
                    className="form-control"
                    ref={inputTodoRef}
                    onChange={(
                      event: React.ChangeEvent<HTMLTextAreaElement>
                    ) => {
                      console.log(
                        "TEXTAREA EVENT TARGET VALUE",
                        event.target.value
                      );
                    }}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Is Done</label>
                  <br />
                  <input ref={isDoneRef} type={"checkbox"} />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary mx-2"
                  onClick={() => onClose()}
                >
                  Close
                </button>

                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default TodoModal;
