import { useReducer, useState } from 'react'
import reducer from './reducer/reducer'
import './App.css'


const initState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  step: 1
}


function App() {
  const [state, dispatch] = useReducer(reducer, initState)


  return (
    <>
      { state.step < 3 ?
        (state.step === 1 ?
          <div>
            <div>
              <label htmlFor="firstN">First Name</label>
              <input type="text" name="firstN" id="firstN" onInput={ (e) => {
                dispatch({ type: "SET_FIRSTNAME", payload: { firstN: e.target.value } })
              } } />
            </div>

            <div>
              <label htmlFor="lastN">Last Name</label>
              <input type="text" name="lastN" id="lastN" onInput={ (e) =>
                dispatch({ type: "SET_LASTNAME", payload: { lastN: e.target.value } })
              } />
            </div>
          </div>
          :
          <div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" value={ state.email } onInput={ (e) =>
                dispatch({ type: "SET_EMAIL", payload: { email: e.target.value } })
              } />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" value={ state.password } onInput={ (e) =>
                dispatch({ type: "SET_PASSWORD", payload: { passw: e.target.value } })
              } />
            </div>
          </div>
        )
        :
        <div>
          <p>{ state.firstName }</p>
          <p>{ state.lastName }</p>
          <p>{ state.email }</p>
          <p>{ state.password }</p>
        </div>
      }
      <button type="submit"
        className={ state.step === 3 ? "hide" : null }
        onClick={ () => {
          dispatch({ type: "SET_STEP", payload: { step: state.step + 1 } })
        } }
      >{ "Next" }</button>

    </>
  )
}

export default App
