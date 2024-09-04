import { FC } from "react"
import { TLayout } from "../types/types"

const Layout: FC<TLayout> = ({ children }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-custom-gradient">
      <div className="flex items-end justify-start flex-col backdrop-blur-sm bg-white/20 p-3">
        {children}
      </div>
    </div>
  )
}

export default Layout