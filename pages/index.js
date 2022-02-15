import Head from 'next/head'
import Banner from "../components/Banner"
import LargeCard from "../components/Card/LargeCard"
import MediumCard from "../components/Card/MediumCard"
import SmallCard from "../components/Card/SmallCard"
import Header from "../components/Header"

export default function Home(props) {
    const { exploreData, cardsData } = props

    return (
        <div>
            <Head>
                <title>Next Airbnb</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Banner />

            <main className="max-w-7xl mx-auto">
                <section className="pt-6">
                    <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  px-8 sm:px-16 ">
                        {
                            exploreData?.map((item, index) =>
                                <SmallCard key={index} {...item} />
                            )
                        }
                    </div>
                </section>

                <section>
                    <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 place-items-center p-0">
                        {
                            cardsData?.map(item =>
                                <MediumCard key={item.img} {...item} />
                            )
                        }
                    </div>
                </section>

                <LargeCard
                    img="/img/large-card.jpg"
                    title="The Greatest Outdoors"
                    description="Wishlists curated by Airbnb"
                    btnText="Get Inspired"
                />
            </main>
        </div>
    )
}


export async function getStaticProps() {
    const exploreData = await fetch("https://links.papareact.com/pyp")
        .then(res => res.json())

    const cardsData = await fetch("https://links.papareact.com/zp1")
        .then(res => res.json())

    return {
        props: {
            exploreData,
            cardsData
        }
    }

}