import React from 'react'


const initialState = {
    id: Math.floor(Math.random() * 10000),
    firstName: "",
    lastName: ""
  };

function Modal({activeModalAdd, setActiveModalAdd}) {
    const [formState, setFormState] = React.useState(initialState)
    console.log(formState)

    const handleSubmit = (e) => {
        e.preventDefault()
        setActiveModalAdd(false)
        
    } 
    
  
    
    return (
        <div className={activeModalAdd ? 'modal active' : 'modal'} >
            <div className={activeModalAdd ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()}>
                <div className="modal__content-title">
                    <h3 className="modal__content-text">Создание сотрудника</h3>
                   
                </div>

                
                <div className="modal__content-info">

                <div onClick={() => setActiveModalAdd(false)} className="modal__content-back">
                    Назад к списку
                </div>
                <form onSubmit={handleSubmit}>
                <div className="modal__content-suptitle">
                
                    <input 
                        type="text" 
                        placeholder="Введите имя сотрудника"
                        value={formState.firstName}
                         onChange={e => {
                             setFormState({ ...formState, firstName: e.target.value });
                        }}
                    />
                    <input 
                        type="text" 
                        placeholder="Введите фамилию сотрудника"
                        value={formState.lastName}
                        onChange={e => {
                         setFormState({ ...formState, lastName: e.target.value });
                         }}
                    />
                   
                </div>
                <div className="modal__content-button">
                   

                    <button onSubmit={handleSubmit} className="button__save">Сохранить</button>
                    
                </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Modal
