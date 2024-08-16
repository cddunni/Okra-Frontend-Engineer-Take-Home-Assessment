import NotFound from "@/assets/svg/404.svg?react"
import { useNavigate } from "react-router-dom"
import Button from "@/components/button/Button"

export default function PageNotFound() {
    const navigate = useNavigate()

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <NotFound className="mb-3" />
            <p className="font-pptelegraph_ub lg:text-5xl md:text-4xl text-2xl text-primary">Something went wrong</p>
            <p className="font-pptelegraph_r lg:text-2xl md:text-lg text-sm text-secondary text-center lg:my-3 md:my-2 my-1.5">Sorry, the page you’re looking for does not exist</p>
            <Button
                btnText="Back"
                theme="primary"
                variant='md:text-xl md:w-32 w-20'
                onClick={()=> navigate('/')}
            />
        </div>
    )
}