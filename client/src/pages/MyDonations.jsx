import RequestedDonationsCard from "../components/RequestedDonationsCard"

const MyDonations = () => {
    return (
        <div>
            <div className="flex flex-col p-5 gap-5">
                <RequestedDonationsCard></RequestedDonationsCard>
                <RequestedDonationsCard></RequestedDonationsCard>
            </div>
        </div>
    )
}
export default MyDonations