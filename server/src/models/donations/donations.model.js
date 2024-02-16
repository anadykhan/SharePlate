const donations = require('./donations.mongo')

async function getAllDonations () {
    return await donations
    .find({})
    .sort({ createdAt: -1 })
}

async function getSingleDonation (donationID) {
    return await donations
    .findById(donationID)
}

async function createDonation (donation) {
    const newDonation = new donations(donation)
    await newDonation.save()
}

async function updateDonation (donation) {
    return await donations
    .findByIdAndUpdate(
        donation._id,
        {
            $set: donation,
        },
        {
            new: true,
        }
    )
}

module.exports = {
    getAllDonations,
    getSingleDonation,
    createDonation,
    updateDonation
}