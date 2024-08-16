import somethingWentWrong from "@/assets/svg/somethingWentWrong.svg"

export default function SomethingWentWrong() {
    return(
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center h-screen p-[16px]">
            <div>
                <h1 className="md:text-5xl text-2xl font-pptelegraph_ub sm:leading-[72px] md:mb-6 mb-4 mt-6 md:text-left text-center">Something went wrong...</h1>
                <p className="text-base md:text-xl font-pptelegraph_r text-secondary">Please check your internet connection and reload the page.</p>
            </div>
            <div>
                <img
                    src={somethingWentWrong}
                    alt="something went wrong"
                />
            </div>
        </div>
    )
}