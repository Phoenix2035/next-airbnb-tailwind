import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchPageButton from "../components/SearchPageButton";

const Search = () => {
    return (
        <div>
            <Header/>

            <main className="flex">

                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">
                        300+ Stays for 5 number of guests
                    </p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <SearchPageButton text="Cancellation Flexibility"/>
                        <SearchPageButton text="Type of Place"/>
                        <SearchPageButton text="Price"/>
                        <SearchPageButton text="Rooms and Beds"/>
                        <SearchPageButton text="More Filters"/>
                    </div>
                </section>

            </main>

            <Footer/>
        </div>
    );
};

export default Search;
