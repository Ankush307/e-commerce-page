import ProductDetails from '@/components/details/ProductDetails'
import RelatedProduct from '@/components/details/RelatedProduct'
import UserReview from '@/components/details/UserReview'
import React from 'react'

const page = () => {
    return (
        <div>
            <ProductDetails />
            <UserReview />
            <RelatedProduct />
        </div>
    )
}

export default page
