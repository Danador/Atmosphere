const file = require("./oval-hanging-mirror.11tydata.json");

const product = file.reviews

const review = product.filter(item => item.review);

const reviewArray = product.filter(item => item.review);


const filtersRec = [
    item => item.look,
    item => item.recommended
]
const rating5 = product.filter(item => item.rating.toString().includes('5'))
const rating4 = product.filter(item => item.rating.toString().includes('4'))
const rating3 = product.filter(item => item.rating.toString().includes('3'))
const rating2 = product.filter(item => item.rating.toString().includes('2'))
const rating1 = product.filter(item => item.rating.toString().includes('1'))

const ratings = [
    rating5,
    rating4,
    rating3,
    rating2,
    rating1
]

const recommendedTrue = product.filter(item => filtersRec.every(fn => fn(item))).length;

const ratingSum = product.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.rating;
}, 0)

const rating = ratingSum / product.length

const recommended = product.filter(item => item.look).length;

module.exports = function () {
    return {
        review: review,
        recommended: recommended,
        rating: rating,
        recommendedTrue: recommendedTrue,
        reviewArray: reviewArray,
        ratings: ratings,
        rating5: rating5,
        rating4: rating4,
        rating3: rating3,
        rating2: rating2,
        rating1: rating1
    }
}
