import {
  Box,
  Divider,
  Flex,
  Image,
  Slider,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import EducationTitle from "../../components/EducationTitle";

export default function EducationColor() {
  const type = ["D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N-Z"];
  const title = [
    "D Color Diamonds (Absolutely Colorless)",
    "E Color Diamond (Colorless)",
    "F Color Diamond (Colorless)",
    "G Color Diamond (Near Colorless)",
    "H Color Diamond (Near Colorless)",
    "I Color Diamond (Near Colorless)",
    "J Color Diamond (Near Colorless)",
    "K Color Diamond (Faint)",
    "L Color Diamonds (Faint to Light Color)",
    "M Color Diamonds (Faint to Light Color)",
    "N-Z Color Diamonds (Faint to Light Color)",
  ];
  const content = [
    "D is the highest color grade, meaning it has nearly no color. Under magnification and to the naked eye, a D color diamond will appear colorless. D color diamonds are usually set in platinum or white gold, as yellow gold and other jewelry settings detract from the diamond’s uncolored beauty. Diamonds with a D color grade are the most rare and expensive on the market, with a significant price premium over other color grades.",
    "E color diamonds look almost identical to D color diamonds. Most of the time, the differences in color between a D and E diamond are only visible to an expert gemologist when the two diamonds are viewed under magnification. Like D color diamonds, E color diamonds are usually set in platinum or white gold to avoid the color of the jewelry detracting from their near flawless color. Although these diamonds are less expensive than D color diamonds, they still command a hefty premium.",
    "F color diamonds are almost identical to D and E color diamonds, with nearly no visible color. Even under magnification and side by side, a D, E and F diamond will look almost identical to anyone other than an expert gemologist.",
    "G color diamonds exhibit nearly no color and appear primarily colorless to the naked eye. The G color grade is the highest, best grade in the “Near Colorless” range of the GIA’s scale, which covers diamonds graded G to J. Although G color diamonds have some tints of color, they’re almost impossible to detect with the naked eye. Like D-F diamonds, these diamonds should be set in platinum or white gold to reduce any effects of color reflection from yellow or rose gold.",
    "H color diamonds appear primarily colorless to the naked eye but have a faint yellow hue that’s often visible under magnification in bright lighting, especially when they’re compared to diamonds of a higher color grade. Like G color diamonds, these can be set in platinum or white gold without any issues. H color diamonds are slightly less expensive than G color diamonds and significantly more affordable than diamonds in the colorless range. This is the minimum color grade we recommend for diamond shapes with a large table, such as the radiant and cushion cuts.",
    "I color diamonds offer a great combination of near colorless looks and good value for money. These diamonds have a slight yellow tint that’s usually only visible when they’re viewed next to diamonds of a higher color grade. An I color round brilliant cut diamond can look fantastic in a platinum or white gold setting, as well as alongside metals such as yellow or rose gold. As you’d expect, I color diamonds are less expensive than G or H color diamonds. This is the minimum color grade we recommend for princess cut diamonds.",
    "J color diamonds look mostly colorless to the naked eye, but usually have a faint yellow tint that’s easy to notice under bright lights and magnification. In diamonds with a large table, the color might also be visible with the naked eye in certain lighting conditions. From a value for money perspective, J color diamonds can be fantastic choices. We recommend this color for round brilliant cut diamonds set in platinum or white gold (solitaire setting), as the cut of the round diamond is great at concealing color. However, the J color grade is not recommended for diamond shapes with a larger table and fewer facets.",
    "K color diamonds are classed as “faint tint” on the GIA’s diamond color scale, meaning they have a slight yellow tint that’s visible even to the naked eye. Diamonds in this price range can be found for significantly less than those in the G to J range. Set in a beautiful yellow gold setting, a K color round brilliant cut diamond can look gorgeous. However, diamonds of this color grade should generally not be set in platinum or white gold.",
    "L color diamonds have a yellow tint that’s visible to the naked eye in normal lighting conditions. Diamonds with this color grade are much more affordable than those in the G to J range, making them a good value for money option. Because of the yellow tint, we don’t recommend the L color grade for non-round diamond shapes. We also don’t recommend it for diamonds set in platinum or white gold. However, L color round brilliant cut diamonds can still look great in yellow gold solitaire rings due to the warm, yellow tone of the metal.",
    "M color diamonds have a definite yellow tint that’s visible to the naked eye. Like K and L diamonds, M color diamonds offer fantastic value for money when compared to near colorless or colorless diamonds. The M color grade is typically the lowest color grade offered by online diamond vendors. Although M color diamonds can look warm and beautiful in antique yellow gold settings, their color is quite easy to notice even with the naked eye.",
    "Diamonds in the N to Z range have noticeable yellow or brown tinting. These diamonds are available at a much lower price point than faintly tinted or near colorless diamonds. We do not recommend diamonds of an N-Z grade.",
  ];
  const image = [
    "https://www.diamonds.pro/wp-content/uploads/2023/08/ColorSlider_D.jpeg",
    "https://www.diamonds.pro/wp-content/uploads/2023/08/ColorSlider_E.jpeg",
    "https://www.diamonds.pro/wp-content/uploads/2023/08/ColorSlider_F.jpeg",
    "https://www.diamonds.pro/wp-content/uploads/2023/08/ColorSlider_G.jpeg",
    "https://www.diamonds.pro/wp-content/uploads/2023/08/ColorSlider_H.jpeg",
    "https://www.diamonds.pro/wp-content/uploads/2023/08/ColorSlider_I.jpeg",
    "https://www.diamonds.pro/wp-content/uploads/2023/08/ColorSlider_J.jpeg",
    "https://www.diamonds.pro/wp-content/uploads/2023/08/ColorSlider_K.jpeg",
    "https://www.diamonds.pro/wp-content/uploads/2023/08/M.jpg",
    "https://www.diamonds.pro/wp-content/uploads/2023/08/M-1.jpg",
    "https://www.diamonds.pro/wp-content/uploads/2023/08/N-Z.jpg",
  ];
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      w={"100vw"}
      m={"100px 0 0 0"}
    >
      <EducationTitle
        title={"The Complete Guide to Diamond Color Scale"}
        description={"Understanding diamond color charts and color scales"}
      />
      <Divider m={"20px 0 20px 0"} />
      <Flex direction={"column"} w={"50vw"} gap={3}>
        <Text fontSize="lg">
          Diamond color is a crucial aspect of your diamond’s appearance. The
          color scale ranges from D (completely clear) to Z (warm yellowish
          tint). While high grades offer little visible difference, they come
          with a significant price increase. For instance, a D color diamond is
          stunning, but so is a G color diamond, and you save 30% with the
          latter. The goal is to find a diamond that appears colorless to the
          naked eye without breaking the bank.
        </Text>
        <Text fontSize="lg">
          For high-end colorless diamonds (D-F), you can expect to pay a
          premium, with prices starting from $6,000 for a 1-carat diamond. On
          the other hand, near-colorless diamonds (G-J) offer excellent value,
          with prices for a 1-carat diamond starting around $5,000. Remember,
          the setting and diamond shape can also influence the perceived color.
        </Text>
        <Text fontSize="lg">
          In this article we discuss everything you need to know about diamond
          color and how to utilize diamonds in the middle of the diamond clarity
          scale to get the best bang for your buck.
        </Text>
        <Text fontSize={"2xl"} fontWeight={"bold"} m={"20px 0 0 0"}>
          The Diamond Color Scale
        </Text>
        <Text fontSize="lg">
          Diamond color refers to how clear a diamond is. The diamond color
          scale ranges from D (entirely clear) to Z (a yellowish tint). Your
          intention with color should be to find a diamond that appears
          colorless. But you don’t need to go to the top of the diamond color
          scale to accomplish this. Very high grades offer little visible
          difference but come with a significant increase in diamond price.
        </Text>
        <Image src={image[sliderValue]} />
        <Box p={4} pt={6} m={"20px 0 20px 0"}>
          <Slider
            aria-label="slider-ex-6"
            min={0}
            max={10}
            step={1}
            onChange={(val) => setSliderValue(val)}
          >
            {type.map((item, index) => (
              <SliderMark key={item} value={index}>
                {item}
              </SliderMark>
            ))}
            <SliderTrack></SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
        <Box p={4} pt={6} m={"0 0 20px 0"}>
          <Text fontSize={"xl"} fontWeight={"bold"} m={"20px 0 0 0"}>
            {title[sliderValue]}
          </Text>
          <Text fontSize={"lg"}>{content[sliderValue]}</Text>
        </Box>
        <Text fontSize={"lg"}>
          When you’re looking for diamonds to purchase, the diamond color is one
          aspect of the buying process that you shouldn’t overlook. Diamonds can
          vary hugely in price based on their color, meaning that picking the
          right color for your specific needs could help you save a lot of money
          without affecting the appearance of your fiancé-to-be’s ring.
        </Text>
        <Text fontSize={"lg"}>
          Distinctly colored diamonds are prized pieces and are available in
          colors such as blue, pink and yellow. In white diamonds, however, a
          yellow tint is generally not seen as desirable.
        </Text>
        <Text fontSize={"lg"}>
          This is because when slight coloring is present, less natural color of
          the light is reflected back to the eye. The more colorless a diamond
          is, generally the more radiant, valuable, and rare it is as well.
        </Text>
      </Flex>
    </Flex>
  );
}
