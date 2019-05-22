import React from 'react'

const EditExpensePage = (props) => {
  console.log(props)

  return (
    <div>
    J&apos;édite la dépense numéro {props.match.params.id}
    </div>
  )

}
export default EditExpensePage
