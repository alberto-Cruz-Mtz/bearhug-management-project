
import {Popover, PopoverTrigger, PopoverContent} from "@heroui/popover";
import {CardVerifiedEmail} from "./components/CardVerifiedEmail.tsx"
import { useState } from "react"

interface Props {
  username: string
  isVerifiedEmail: boolean
}

export const VerifiedEmail = ({username, isVerifiedEmail}: Props) => {
  return (
      <div className="absolute top-[20%] left-[45%]">
       <Popover isOpen={isVerifiedEmail} placement="top" backdrop="blur" >
          <PopoverTrigger>
            <label></label>
          </PopoverTrigger>
          <PopoverContent>
            <CardVerifiedEmail username={username}/>
          </PopoverContent>
       </Popover> 
      </div>
  )
}

