import React from 'react'

const DropDown = ({opcoes}) => {
  return (
     <div className="DropDown">
        {filteredOptions.map((nome) => (
          <button
            key={nome}
            // onClick={() => {
            //   onSelect(nome), onChangeDropDown(nome);
            // }}
          >
          </button>
        ))}
    </div>
  )
}

export default DropDown