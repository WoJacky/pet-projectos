import React from 'react'

const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.submit}>
                <input type="test" value={props.value} placeholder="Wpisz miasto" onChange={props.change} />
                <button> Wyszukaj miasta</button>
            </form>
        </div>
    )
}

export default Form