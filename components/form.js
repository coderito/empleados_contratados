import React from 'react'
import AddUserForm from './addUserForm';
import UpdateUserForm from './updateUserForm';


export default function Form() {
  const flag = false;

  return (
    <div>
      {flag ? <AddUserForm /> : <UpdateUserForm />}
    </div>
  )
}
