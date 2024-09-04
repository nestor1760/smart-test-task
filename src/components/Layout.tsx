import { FC } from "react"
import { TLayout } from "../types/types"

const Layout: FC<TLayout> = ({ children }) => {
  return (
    <div className="h-screen flex items-center justify-center bg-custom-gradient">
      <div className="flex items-end justify-start flex-col backdrop-blur-sm bg-white/20 p-3 rounded-2xl">
        {children}
      </div>
    </div>
  )
}

export default Layout