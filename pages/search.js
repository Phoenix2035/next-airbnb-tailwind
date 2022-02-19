import { useRouter } from "next/router"
import { format } from "date-fns"

import Header from "../components/Header"
import Footer from "../components/Footer"
import SearchPageButton from "../components/SearchPageButton"
import InfoCard from "../components/InfoCard"
import MapBox from "../components/MapBox"

const Search = ({ searchResults }) => {
    const router = useRouter()

    const { location, startDate, endDate, noOfGuests } = router.query

    const guestLocation = location?.charAt(0).toUpperCase() + location?.slice(1)
    const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy")

    const rangeDate = () => {
        if (new Date(startDate).getTime() === new Date(endDate).getTime()) {
            return formattedStartDate
        } else {
            return `${formattedStartDate} until ${formattedEndDate}`
        }
    }

    return (
        <div>
            <Header placeholder={`${location} | ${rangeDate()} | ${noOfGuests} guests`} />

            <main className="flex">

                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">
                        300+ Stays - {rangeDate()} - for {noOfGuests} guests
                    </p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {guestLocation}</h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <SearchPageButton text="Cancellation Flexibility" />
                        <SearchPageButton text="Type of Place" />
                        <SearchPageButton text="Price" />
                        <SearchPageButton text="Rooms and Beds" />
                        <SearchPageButton text="More Filters" />
                    </div>

                    <div className="flex flex-col">
                        {
                            searchResults?.map(item =>
                                <InfoCard key={item.img} {...item} />
                            )
                        }
                    </div>

                </section>

                <section className="hidden xl:inline-flex xl:min-w-[600px]">
                    <MapBox searchResults={searchResults}/>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Search;


export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json())

    return {
        props: {
            searchResults
        }
    }
}