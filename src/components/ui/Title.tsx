"use client"
const Title = ({children, className}:{children:React.ReactNode, className?: string}) => {
    return <h2 className={cn("text-2xl font-semibold",className)}>{children}</h2>
}
export default Title;
import React from 'react'
import { cn } from '@/lib/utils'