import NotFound from "@/assets/svg/404.svg?react"
import { useNavigate } from "react-router-dom"
import {Button} from "@/components"
import React from "react"
import './_page-not-found.scss'

export default function PageNotFound() {
    const navigate = useNavigate()

    return (
        <div className="page-not-found-container">
            <NotFound className="mb-3" />
            <p className="font-pptelegraph_ub title">Something went wrong</p>
            <p className="font-pptelegraph_r description">Sorry, the page you’re looking for does not exist</p>
            <Button
                btnText="Back"
                theme="primary"
                variant='back-button'
                onClick={()=> navigate('/')}
            />
        </div>
    )
}