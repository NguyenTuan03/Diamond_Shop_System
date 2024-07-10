import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import FeaturedCard from "./FeaturedCard";

const images = [
    {
        src: "https://i.pinimg.com/564x/18/7c/25/187c2505793ff7a4c0e8fda296d2c901.jpg",
        title1: "Round · 0.35 Carat · D Color",
        title2: "V1 Clarity · Good · Fluor",
        title3: "GIA 2286122135",
    },
    // Add more items as needed
    {
        src: "https://i.pinimg.com/564x/18/7c/25/187c2505793ff7a4c0e8fda296d2c901.jpg",
        title1: "Round · 0.33 Carat · J Color",
        title2: "VS1 Clarity · None · Fluor",
        title3: "GIA 2486742135",
    },
    {
        src: "https://i.pinimg.com/564x/18/7c/25/187c2505793ff7a4c0e8fda296d2c901.jpg",
        title1: "Round · 0.39 Carat · F Color",
        title2: "VS2 Clarity · Very Good · Fluor",
        title3: "GIA 2123742135",
    },
];

const InfiniteMovingFeaturedCards = () => {
    return (
        <Box overflow="hidden" whiteSpace="nowrap" maxWidth="70vw" margin="0 auto">
            <Flex
                as="div"
                animation="marquee 20s linear infinite"
                display="inline-flex"
            >
                {images.map((image, index) => (
                    <FeaturedCard
                        key={index}
                        imageSrc={image.src}
                        title1={image.title1}
                        title2={image.title2}
                        title3={image.title3}
                    />
                ))}
                {images.map((image, index) => (
                    <FeaturedCard
                        key={index + images.length}
                        imageSrc={image.src}
                        title1={image.title1}
                        title2={image.title2}
                        title3={image.title3}
                    />
                ))}
            </Flex>

            <style jsx>{`
                @keyframes marquee {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </Box>
    );
};

export default InfiniteMovingFeaturedCards;
