type pricingInformation = {
    title: string,
    price: number,
    features: string[]
}

const style = {
    highlight: "bg-indigo-500",
    default: ""
}

export default function PricingCard({ title, price, features }: pricingInformation) {
    return (
        <div className="p-4 xl:w-1/4 md:w-1/3 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">{title}</h2>
                <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                    <span>${price}</span>
                    <span className="text-lg ml-1 font-normal text-gray-400">/mensualmente</span>
                </h1>
                {
                    features.map((feature, index) => {
                        return (
                            <p key={index} className="flex items-center text-gray-400 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>{feature}
                            </p>
                        );
                    })
                }
                <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">Button
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
                <p className="text-xs text-gray-400 mt-3">Literally you probably haven't heard of them jean shorts.</p>
            </div>
        </div>
    )
}
