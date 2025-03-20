import ProductDetails from '@/components/details/ProductDetails'
import RelatedProduct from '@/components/details/RelatedProduct'
import UserReview from '@/components/details/UserReview'
import React, { Suspense } from 'react'

const page = () => {
    return (
        <Suspense>
            <ProductDetails />
            <UserReview />
            <RelatedProduct />
        </Suspense>
    )
}

export default page
