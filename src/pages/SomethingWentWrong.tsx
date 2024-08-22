import SomethingWentWrongIcon from "@/assets/svg/somethingWentWrong.svg?react"
import React from "react"
import '../assets/scss/pages/_something-went-wrong.scss'

export default function SomethingWentWrong() {
    return(
        <div className="error-page-container">
            <div>
                <h1 className="title font-pptelegraph_ub">Something went wrong...</h1>
                <p className="description font-pptelegraph_r">Please check your internet connection and reload the page.</p>
            </div>
            <div>
                <SomethingWentWrongIcon/>
            </div>
        </div>
    )
}