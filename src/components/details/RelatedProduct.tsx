import React from "react";
import { ALSO_LIST_LIST } from "@/utils/helper";
import CustomSwiper from "../common/CustomSwiper";

const RelatedProduct = () => {
    return (
        <div className="px-4">
            <div className="max-w-[1240px] pt-7 pb-[78px] mx-auto">
                <CustomSwiper heading="You might also like" itemMap={ALSO_LIST_LIST} />
            </div>
        </div>
    );
};

export default RelatedProduct
