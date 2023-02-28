import { useState } from "react"

export const useModal = (initialMode = false) => {   
    const [isOpen, setIsOpen] = useState(initialMode)
    const toggle = () => setIsOpen(!isOpen)
    return {isOpen, toggle}
}