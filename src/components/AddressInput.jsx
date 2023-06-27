import { useState, useCallback } from "react"
import { useCombobox } from "downshift"
import axios from "axios"

function debounce(fn, time) {
  let timeoutId
  return wrapper
  function wrapper(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      timeoutId = null
      fn(...args)
    }, time)
  }
}

export default function AddressInput({ onChange }) {
  const [items, setItems] = useState([])

  const loadMatchAddresses = useCallback(debounce(async (inputValue) => {
    try {
      const { data } = await axios
        .get(`https://nominatim.openstreetmap.org/search?format=json&q=${inputValue}`)
      setItems(data)
    } catch {
      console.log('Error:', error);
    }
  }, 500), [])

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
  } = useCombobox({
    onInputValueChange({ inputValue }) {
      loadMatchAddresses(inputValue)
    },
    items,
    itemToString(item) {
      return item ? item.display_name : ''
    },
    onSelectedItemChange({ selectedItem }) {
      if (onChange) {
        onChange(selectedItem)
      }
    }
  })

  return (
    <div className="flex-1">
      <input
        placeholder="Address"
        className="rounded shadow text-base py-2 px-3 w-full"
        {...getInputProps()}
      />
      <ul
        className={`absolute bg-white mt-1 shadow-md max-h-80 overflow-scroll p-0 ${!(isOpen && items.length) && 'hidden'
          }`}
        {...getMenuProps()}
      >
        {isOpen &&
          items.map((item, index) => (
            <li
              className={
                `py-2 px-3 shadow-sm flex flex-col ${highlightedIndex === index && 'bg-blue-300'} ${selectedItem?.place_id === item.place_id && 'font-bold'}`}
              key={`${item.place_id}${index}`}
              {...getItemProps({ item, index })}
            >
              <span>{item.display_name}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}