import {
  Box,
  Center,
  Divider,
  Flex,
  Image,
  Link as LinkCharkaUI,
  Text,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

import React from "react";
import EducationTitle from "../../components/EducationTitle";
import EducationShapeForm from "../../components/EducationShapeForm";
import EducationBottomLineRec from "../../components/EducationBottomLineRec";
export default function EducationShape() {
  const title = [
    "1. Round Brilliant Cut Diamonds",
    "2. Princess Cut Diamond",
    "3. Emerald Cut Diamond",
    "4. Cushion Cut Diamond",
    "5. Asscher Cut Diamond",
    "6. Pear Shaped Diamond",
    "7. Oval Diamond",
    "8. Heart Shaped Diamond",
    "9. Radiant Cut Diamond",
    "10. Marquise Diamond",
    "11. Baguette Diamond",
    "12. Trillion Diamond",
  ];
  const image = [
    "https://www.diamonds.pro/wp-content/uploads/2021/01/Round-cut.jpg",
    "https://www.diamonds.pro/wp-content/uploads/2021/05/Princess-cut.png",
    "https://www.diamonds.pro/wp-content/uploads/2021/01/Emerald-cut.jpg",
    "https://www.diamonds.pro/wp-content/uploads/2021/01/cushion-cut.jpg",
    "https://www.diamonds.pro/wp-content/uploads/2021/01/Asscher-cut.jpg",
    "https://www.diamonds.pro/wp-content/uploads/2021/05/Pear-Shape-300x202.png",
    "https://www.diamonds.pro/wp-content/uploads/2021/05/Oval-300x240.png",
    "https://www.diamonds.pro/wp-content/uploads/2021/01/Heath-shape.jpg",
    "https://www.diamonds.pro/wp-content/uploads/2021/01/Radiant-Cut.png",
    "https://www.diamonds.pro/wp-content/uploads/2021/01/marquise-cut.jpg",
    "https://www.diamonds.pro/wp-content/uploads/2017/01/Diamond_Baguette.png",
    "https://www.diamonds.pro/wp-content/uploads/2017/01/Diamond_Trillion.png",
  ];
  const description = [
    "As the leading diamond ring shape in terms of popularity, the round brilliant cut represents over two thirds of the diamonds sold. In 1919, Marcel Tolkowsky published, “Diamond Design: A Study of the Reflection and Refraction of Light in Diamond,” which explained the ideal angles for a diamond to produce the highest level of brilliance and fire. His work created a surge in the round brilliant cut’s popularity, which remains consistent today. The round diamond’s refined shape allows for maximum reflection of light, contributing to its incredible brilliance. Round brilliant cuts have 58 facets (including the culet).",
    "This fancy cut shape is second in diamond popularity after the round brilliant cut. It’s created from the inverted pyramid of the rough diamond stone. Traditionally square, the princess cut diamond achieves greater brilliance and fire than other similarly shaped diamonds. Rectangular princess cuts are also available.",
    "Using the technique originally designed to cut emeralds, this diamond ring shape comes rightly by its name. With its large table surface, the emerald cut diamond offers abundant reflections through its long, straight lines or ‘steps.’ Emerald cuts are prominent in both square and rectangle.",
    "The cushion cut diamond gets its name from the combination of a square or rectangular shape with rounded edges, making it look like a pillow or cushion. Due to its precise bending and dispersion of light, the cushion cut beams with fire.",
    "First produced by the Asscher Brothers of Holland in 1902, the asscher cut diamond regained popularity in 2002 after its one hundredth anniversary and a slight modification to the cut technique. As a dazzling alternative to the emerald cut, the asscher cut diamond hosts a smaller table and more layered facets. Brilliance is achieved through light reflection among the square facets seen underneath the table. The asscher cut’s trimmed corners give it extra style and stability.",
    "With a rounded side that narrows to a distinct point, the pear shaped diamond is an elegant, timeless choice. If purchasing for a ring, the pointed end will point toward the heart of the wearer. Symmetry is critical to the appearance of a pear shaped diamond so it shimmers evenly.",
    "Showcasing similar brilliance and fire to the round cut, the oval cut diamond is an exquisite choice for those who wish to wear a unique shape. The oval’s elongated silhouette offers a large appearance compared to other shapes of the same carat.",
    "A prominent symbol of love, the heart shaped diamond boasts an exquisite figure that can be set in a ring, pendant or other jewelry piece. Heart shaped diamonds range in slenderness and width, selected primarily on personal preference. A well-cut heart shaped diamond should be symmetrical, so it appears balanced and full. The point or cleft of the diamond should be distinct.",
    "Radiant cut diamonds gained their popularity in the 1980s due to their dazzling brilliance which is only exceeded by the round brilliant. The radiant cut is an enchanting choice due to its numerous facets found in the pavilion and crown. These features provide a high level of both brilliance and fire. Its cropped corners also make it a delightful match for pairing with rounded or square diamonds.",
    "Originally requested by King Louis XIV to mimic the shape of his mistress’ mouth, the marquise diamond has remained a flattering and delightful choice for several centuries. The narrow body shape of the marquise resembles the shape of an elongated eye. Its stunning large crown is complementary to wearers as it makes the finger appear longer and more slender.",
    "Showcasing 24 parallel facets, the baguette diamond hosts long, parallel lines and remarkable clarity. Rectangular in shape with step cutting, baguettes make for vibrant ring center pieces and graceful side stones.",
    "Trillion diamonds, also known as trilliant diamonds, are incredibly enchanting and unique. Different than round, square or rectangular shapes, the trillion almost always makes an impression. With their rich brilliance and deep fire, trillions diverge from popular shapes yet are just as exquisite.",
  ];
  const lengthToWidthRatio = [
    "For the most aesthetic diamonds, choose a length to width ratio of 1.0-1.03.",
    "As noted with asscher cuts, a length to width ratio of 1.0-1.05 offers a square shape to the naked eye. For a rectangular princess cut, 1.5-2.0 is a suitable range.",
    "A traditional emerald cut ratio ranges from 1.30 to 1.60, with the most popular choice being 1.50.",
    "Cushions are often square, but can be rectangular as well. For the square shape, keep the ratio between 1.0 -1.09. Slight rectangles usually range from 1.15-1.25 in ratio.",
    "A length to width ratio for a square asscher should fall between 1.0-1.05 to maintain a square look for the naked eye.",
    "The classic length to width ratio ranges from 1.45-1.75. Reviewing a variety of ratios will give you an idea of personal preference. You may wish, for example, for a wider or more narrow shape.",
    "While always dependent on personal preference, the oval diamond is often appealing in a ratio of 1.30-1.50.",
    "An ideal length to width ratio is 1.00. The lower the ratio, the more “chubby” the heart will look. If the ratio is above 1.10, the heart will appear more stretched (elongated, tall and thin).",
    "A 1.0-1.05 is an ideal range for a square cut. Rectangular shapes may have a ratio of up to 2.0.",
    "The marquise’s unique structure offers a length to width range of 1.85 to 2.1.",
    "Based on personal preference and use of the baguette diamond, length to width ratios range from 1.50-2.40.",
    "The ideal length to width ratio for a trillion is 1.0-1.10.",
  ];
  const proTip = [
    "The cut quality of a round brilliant diamond significantly impacts its beauty and is perhaps the most important element when selecting a diamond. In addition to reviewing ratings or GIA reports, look at the diamond firsthand or ask for the help of an expert. Some expensive diamonds with higher ratings may have more noticeable inclusions than certain less expensive diamonds.",
    "To prevent damage to the corners, a princess cut diamond should be set with prongs on all four corners. Inclusions will generally be hidden by the prongs, so it’s acceptable to choose a princess cut with inclusions toward the edges.",
    "Because of its magnificently large table, inclusions may be more noticeable in an emerald cut. For this reason, we advise seeking a VS1 or VS2 for the emerald shape. Normally an SI1 has a good chance of not being visible. But, as you can see in this diamond from James Allen, that is rarely the case in emerald cuts.",
    "As a general guideline, try to stick to cushions with a depth under 70% and a table under 70%. This will ensure brilliance and fire is maintained throughout the depth of the diamond.",
    "When it comes to color, asscher cuts don’t mask the color of the diamond’s rough material as well as other cuts like the round brilliant and princess cut. Asschers are cut for their clarity and lustre—so nothing is hidden. For this reason, we recommend buying a minimum of an H color in the asscher cut.",
    "When selecting your pear shaped diamond, watch for the severity of the bowtie—the dark area running across the center of the diamond. All pear shaped diamonds, and other fancy elongated shapes, usually have a bowtie. Review the diamond or have an expert assist you in determining if the bowtie is too prominent within the piece.",
    "Similar to the pear shaped cut, look for the severity of the bowtie in an oval. The bowtie is the dark area running across the center of the diamond. Review each diamond or have an expert assist you with determining if the bowtie is too prominent within the piece.",
    "Due to its form, the heart shaped cut comes best in a higher carat, such as 1 or 2. If using a smaller carat weight, a three-prong setting will aid in highlighting the outline of the heart.",
    "The color differences in radiant cuts are harder to perceive than in other diamond ring shapes. An H color grade is usually sufficient in radiants, allowing you to use your budget on other aspects of the cut quality.",
    "Due to its long shape, symmetry is important when selecting a marquise diamond. Ensure the two pointed ends align almost perfectly with each other. When a marquise diamond is set, two prongs will hold the pointed ends to prevent chipping. It’s worth noting that inclusions near the tips of the marquise will likely be hidden by these prongs.",
    "Usually available in smaller sizes, the baguette is a perfect accent to another stone or as a part of a wedding band. Several baguettes can be placed next to each other for a large diamond array. Because of the baguette’s clearness, ensure no noticeable inclusions are contained within the diamond.",
    "Trillions make for prominent centerpieces of an engagement ring or as complementary side stones. When setting a trillion diamond, ensure the edges are protected with prongs. If a trillion has inclusions near its points, they will likely be hidden by prongs or a jewelry border.",
  ];
  const strongTips = [
    "The round brilliant cut is popular for many reasons, one being that it provides exceptional brilliance and a classic, ageless look. Round brilliant cut diamonds are stunning choices for engagement rings, necklaces and other fine pieces.",
    "The princess cut allows for a square outline while still offering nearly the same brilliance as the round diamond. Due to the larger yield maintained from cutting for a princess, the price per carat is usually much lower than the round cut.",
    "Most notably, the emerald cut showcases size better than other diamonds of the same carat. Emerald cuts are a premium choice for those desiring a larger piece without an enormous price tag.",
    "With many cut options, choosing a cushion diamond offers creativity and personalization. Cushions also have the luxurious appeal of a classic fashion along with modern fire and flair.",
    "The asscher cut’s deep pavilion and precision creates an enamoring appeal. While similar to the emerald cut, the asscher tends to offer a bit more sparkle, due to its high crown and 58 facets.",
    "A pear shaped diamond makes for an enchanting engagement ring. Because well-cut pear shapes are harder to find, it’s an exquisite alternative to traditional cuts like the round diamond. The pear shaped also hides inclusions well.",
    "This fancy length diamond is durable because it carries no pointed edges. Ovals also have a lower price point than round diamonds while still maintaining the curved shape.",
    "In addition to being a sign of romance, the heart shaped diamond requires a premium cut, prolonging and possibly increasing its value over time.",
    "Radiants are formed with many facets and angles, making them appear almost like cracked ice. Because of this, flaws and inclusions are easily hidden. The beveled corners of radiant cuts allow for more stability—making it a wise choice for those with an active lifestyle.",
    "The marquise’s elongated figure gives the appearance of a larger stone when compared to other shapes in the same carat. Making the fingers of the wearer look thinner and longer, the marquise shines brightly and is usually noticed for its unique shape.",
    "The long bar shape of the baguette offers exceptional size even at a low carat. Its clarity and appealing symmetry make it a classic and timeless diamond.",
    "The personality of the trillion is perhaps its strongest asset. The sharp, unique features create a dashing look, maximized by the trillion’s immense width. For this reason, trillions tend to look larger than other diamonds of the same carat weight.",
  ];
  const sampleCost = [
    "based on a 1.02 carat with an excellent cut, J color and SI1 clarity",
    "based on a 1.01 carat well cut, I color and a VVS2 clarity",
    "based on a 1.01 carat well cut, I color and a VVS1 clarity",
    "based on a 1.00 carat well cut, E color and a VS2 clarity",
    "based on a 1.01 carat well cut, I color and a VVS1 clarity",
    "based on a 1.01 carat well cut, E color and a SI1 clarity",
    "based on a 1.00 carat well cut, E color and a SI1 clarity",
    "based on a 1.01 carat well cut, H color and a VS2 clarity",
    "based on a 1.02 carat well cut, H color and a VS1 clarity",
    "based on a 1.03 carat well cut, H color and a VS1 clarity",
    "based on a 1.0 carat well cut, G color and a VS1 clarity",
    "based on a 1.0 carat well cut, G color and a VS1 clarity",
  ];
  const sampleCostPrice = [
    "2,810",
    "3,410",
    "3,200",
    "4,450",
    "2,780",
    "4,210",
    "4,400",
    "3,920",
    "3,330",
    "4,730",
    "3,200",
    "5,180",
  ];
  const whatToLookFor = [
    "Make sure the diamond shape needs to fit the style of setting you are going for.",
    " Some shapes are more brilliant than others. The round diamond is the most brilliant.",
  ];
  const whatToAvoid = [
    "If you are not 100% sure of your choice, avoid trendy cuts like marquise or heart shapes.",
    "Regardless of shape, the diamond needs to be well cut. For more info, read our article on diamond cut.",
  ];
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      w={"100vw"}
      m={"100px 0 0 0"}
    >
      <EducationTitle
        title={"A Guide to Diamond Shapes"}
        description={
          "All about diamond shapes and which diamond shapes are most popular in 2022"
        }
      />
      <Divider m={"20px 0 20px 0"} />
      <Flex direction="column" w={"50vw"} gap={3}>
        <Text fontSize="lg">
          Diamond shapes define the overall geometry and form of a diamond. From
          the classic Round to the unique Marquise, each shape offers distinct
          characteristics and aesthetics. While Round diamonds are the most
          popular, accounting for over 65% of diamonds sold, other shapes like
          Princess, Radiant, and Cushion have their own charm. Recently, Oval
          and Pear shapes have been gaining in popularity.
        </Text>
        <Text fontSize="lg">
          Settling on a diamond shape is mostly dependent on your personal style
          and preferences. In this article we will discuss each shape and help
          you with that decision.
        </Text>
        <Text fontSize={"2xl"} fontWeight={"bold"} m={"20px 0 0 0"}>
          What Is a Diamond Shape?
        </Text>
        <Text fontSize="lg">
          The term “diamond shape” refers the the geometric characteristics of a
          diamond. There are two major groups for diamond shapes: Round diamonds
          and fancy shapes diamonds. Round shape, or round brilliant cut, is the
          most popular and traditional cut by a considerable margin. That is why
          round shapes have always been their own category.
        </Text>
        <Text fontSize="lg">
          There are also several fancy diamond shapes, such as pear, heart and
          trillion-shaped diamonds. Each shape has its own advantages and
          disadvantages, from its appearance and brilliance to the diamond price
          per carat.
        </Text>
        <Box
          borderLeft={"2px solid"}
          borderColor={"blue.300"}
          bg={"blue.100"}
          padding={2}
        >
          <Text fontSize="lg">
            “Fancy Shaped or Fancy Cut diamonds (as they are also known) are
            beautiful and sometimes even more affordable than the traditional
            round brilliant. These geometric works of art are created by diamond
            cutters who are master craftsmen with a cutting wheel.”{" "}
            <LinkCharkaUI
              color={"blue.400"}
              href="https://www.americangemsociety.org/fancy-these-four-fancy-shape-diamonds/"
              isExternal
            >
              {" "}
              American Gem Society
            </LinkCharkaUI>
          </Text>
        </Box>
        <Image src="https://www.diamonds.pro/wp-content/uploads/2022/04/6A7A7777-Edited-2-1024x683.jpg" />
        <Text fontSize="lg">
          Knowing the basic information about diamond shapes will help you
          select the perfect diamond for yourself, a loved one or your
          fiancé-to-be. Each shape offers a distinct set of recognizable
          differences that determine cost, quality and overall appeal.
        </Text>
        <Text fontSize="lg">
          Below, we’ve listed the 12 most popular diamond shapes. We’ve also
          provided an overview of what to look for in each shape, as well as
          each diamond shape’s key strong points and weaknesses.
        </Text>
        <Text fontSize={"2xl"} fontWeight={"bold"} m={"20px 0 0 0"}>
          Diamond Shapes Chart
        </Text>
        <Text fontSize="lg">
          Our diamond shapes guide will help you maximize your budget with your
          desired taste and style. With these notes in mind, you can select a
          diamond that will be cherished and admired for years to come.
        </Text>
        <Text fontSize={"2xl"} fontWeight={"bold"} m={"20px 0 0 0"}>
          Diamond Shape vs. Diamond Cut?
        </Text>
        <Text fontSize="lg">
          Diamond cut is sometimes used to refer to which shape the diamond is.
          This is a bit confusing. The reason for this is that each shape has a
          technical name that has the word cut in it (e.g. round brilliant cut).
          In this article, we are referring to the various shapes diamonds come
          in.
        </Text>
        <Text fontSize="lg">
          To find your ideal diamond, first, select the desired shape. Then work
          toward finding that shape in the most appealing cut.
        </Text>
        <Text fontSize="lg">
          Although diamond shape and diamond cut are often used interchangeably
          when it comes to diamonds, they’re actually quite distinct, different
          terms. For more information on quality, check out our article on
          diamond cut.
        </Text>
        <Text fontSize="lg">
          The shape of a diamond is indicative of the outline or external figure
          of the diamond. For example, pear shaped, round brilliant and cushion
          all refer to the actual shape and appearance of the diamond.
        </Text>
        <Text fontSize="lg">
          Our diamond shapes guide will help you maximize your budget with your
          desired taste and style. With these notes in mind, you can select a
          diamond that will be cherished and admired for years to come.
        </Text>
        <Text fontSize="lg">
          Our diamond shapes guide will help you maximize your budget with your
          desired taste and style. With these notes in mind, you can select a
          diamond that will be cherished and admired for years to come.
        </Text>
        <Image src="https://www.diamonds.pro/wp-content/uploads/2022/04/shapes-1024x992.png" />
        <Text fontSize="lg">
          <strong>Note:</strong> Length to width ratio is measured by dividing
          the length of the diamond by the width. For example, if a diamond has
          a length of 5mm and a width of 3mm, the length to width ratio is 1.67.
        </Text>
        <Text fontSize="lg">
          The length to width ratio signifies how proportionate the diamond is
          along with its intended shape (i.e. square vs. rectangular).
        </Text>
        <Text fontSize={"2xl"} fontWeight={"bold"} m={"20px 0 0 0"}>
          Diamond Shapes: Which is Most Popular ?
        </Text>
        {title.map((item, index) => (
          <EducationShapeForm
            key={index}
            title={item}
            image={image[index]}
            description={description[index]}
            lengthToWidthRatio={lengthToWidthRatio[index]}
            proTip={proTip[index]}
            strongPoints={strongTips[index]}
            sampleCost={sampleCost[index]}
            sampleCostPrice={sampleCostPrice[index]}
          />
        ))}
        <Text fontSize={"2xl"} fontWeight={"bold"} m={"20px 0 0 0"}>
          Diamond Shapes: What is the Ideal Clarity?
        </Text>
        <Box
          borderLeft={"2px solid"}
          borderColor={"blue.300"}
          bg={"blue.100"}
          padding={2}
        >
          <Text fontSize="lg">
            ““Diamond clarity refers to the absence of inclusions and blemishes.
            Diamonds without these birthmarks are rare, and rarity affects a
            diamond’s value. Using the GIA International Diamond Grading
            System™, diamonds are assigned a clarity grade that ranges from
            flawless (FL) to diamonds with obvious inclusions (I3).”{" "}
            <LinkCharkaUI
              color={"blue.400"}
              href="https://www.gia.edu/gia-about/4cs-clarity"
              isExternal
            >
              {" "}
              Gemological Institute of America (GIA){" "}
            </LinkCharkaUI>
          </Text>
        </Box>
        <Text fontSize="lg">
          Different diamond shapes can affect the minimum clarity grade you
          should look for. Diamond clarity chart shows how many, how large and
          what types of imperfections are present in a diamond. The highest
          grade you can get in clarity is FL, or Flawless, indicating the
          diamond is completely clear of inclusions even under intense
          magnification.
        </Text>
        <Text fontSize="lg">
          Your aim shouldn’t be to find a flawless diamond, however. Instead,
          you’ll want to look for diamonds that are “eye-clean”, meaning they
          have no inclusions that are easily noticeable to the naked eye.
          Oftentimes a VVS or VS clarity diamond will look no different to a
          flawless diamond, yet it will carry a significantly lower price tag.
        </Text>
        <Text fontSize="lg">
          The threshold for what makes an eye-clean diamond can vary greatly,
          depending on size (it’s easier to spot imperfections in larger
          diamonds), as well as shape. Some diamond shapes hide or show
          inclusions better than others, allowing you to go with a lower clarity
          grade, without sacrificing quality.
        </Text>
        <Text fontSize="lg">
          Brilliant cuts, such as round, cushion, radiant, oval and pear shaped
          diamonds, all hide inclusions well, which may allow you to go as low
          as SI1 or SI2.
        </Text>
        <Text fontSize="lg">
          Princess cut diamonds, too, hide inclusions well, but with this shape
          you need to ensure that it doesn’t have any inclusions in its corners,
          as this can cause the diamond to chip if it knocks on something.
        </Text>
        <Text fontSize="lg" m={"0 0 20px 0"}>
          Step cuts, unlike brilliant cuts, make it easier to notice inclusions.
          These shapes include asscher, emerald and baguette diamonds. The long,
          straight facets of these diamond shapes make imperfections very
          visible, so you should look for at least VS1 or VS2 in clarity here.
        </Text>
        <Image src="https://www.diamonds.pro/wp-content/uploads/2022/05/shapes-blue-1-1024x489.png" />
        <Center>
          <Text fontSize={"md"}>Diamond Shape Chart</Text>
        </Center>
        <Text fontSize={"2xl"} fontWeight={"bold"} m={"20px 0 0 0"}>
          FAQs About Diamond Shapes & Cuts
        </Text>
        <Text fontSize="lg">
          Not sure which shape is best for you? Below, we’ve answered some of
          the most common questions about diamond shapes and cuts.
        </Text>
        <Text fontSize="lg" fontWeight={"bold"}>
          What is the best engagement ring shape?
        </Text>
        <Text fontSize="lg">
          There’s no “best” diamond shape for everyone. Each diamond shape has
          its own range of strengths and weaknesses, meaning that the best
          diamond shape for you depends on your personal tastes, preferences and
          budget.
        </Text>
        <Text fontSize="lg">
          The round brilliant cut offers the greatest level of brilliance and
          fire, meaning it tends to shine more than other diamond cuts. However,
          it’s also the most expensive diamond shape from a cost-per-carat
          perspective.
        </Text>
        <Text fontSize="lg">
          From a value-for-money perspective, oval, pear and marquise diamonds
          often look larger than they are, meaning they offer a good combination
          of brilliance and value for money. Shapes like the princess cut are
          also a great value for money buy if you want to get the most carats
          for your budget.
        </Text>
        <Text fontSize="lg">
          All in all, the best diamond shape comes down to your tastes,
          preferences, expectations and budget. There’s no “best” cut, meaning
          it’s best to choose something that you think your fiancé-to-be will
          enjoy and appreciate.
        </Text>
        <Text fontSize="lg" fontWeight={"bold"}>
          Diamond shape or diamond cut, what’s better?
        </Text>
        <Text fontSize="lg">
          Understand that diamond shape and cut are two very different things.
          Cut is a measurement of quality – diamonds are given grades for cut
          ranging from Poor to Excellent (or Ideal, depending on the grading
          entity), so it’s easy to say that one diamond has a better cut than
          another. Diamond cut is also the most important of the 4Cs that
          determines how much brilliance a diamond has.
        </Text>
        <Text fontSize="lg">
          Diamond shape, however, is a matter of personal preference rather than
          quality. There’s no one shape that is better or worse than another
          shape, so it’s not like diamond cut where you might put your budget
          towards the highest grade possible.
        </Text>
        <Text fontSize="lg" fontWeight={"bold"}>
          Which diamond shapes sparkles the most?
        </Text>
        <Text fontSize="lg">
          As we mentioned above, the round diamond offers the greatest level of
          brilliance and fire, meaning it sparkles the most. With 58 facets, the
          round brilliant cut is actually designed specifically to offer the
          most brilliance and fire.
        </Text>
        <Text fontSize="lg" m={"20px 0 20px 0"}>
          Other diamond shapes that sparkle a lot include the:
        </Text>
        <Text fontSize="lg">
          <strong>Radiant cut</strong>. As its name suggests, the radiant cut is
          extremely brilliant, especially when exposed to light. A radiant cut
          diamond has 70 facets, allowing it to take in and reflect an
          incredible amount of light.
        </Text>
        <Text fontSize="lg">
          <strong>Cushion cut</strong>. The cushion cut is based on a
          combination of the round brilliant cut and the classic old mine cut.
          This gives this shape a lot of brilliance and fire when it’s cut well.
          As an extra bonus, a cushion cut diamond is usually less expensive
          than a round brilliant cut diamond of equivalent cut quality, clarity,
          color and carat weight.
        </Text>
        <Text fontSize="lg">
          <strong>Marquise cut</strong>. Marquise cut diamonds have 58 facets,
          providing great brilliance and fire. Thanks to this cut’s unique
          shape, it also looks larger than other diamonds of an equivalent carat
          weight.
        </Text>
        <Text fontSize="lg">
          <strong>Oval cut</strong>. Oval diamonds offer similar brilliance and
          fire to the round brilliant cut. Due to their shape, diamonds in this
          cut can also appear larger than others.
        </Text>
        <Text fontSize="lg">
          While the shape of a diamond can affect its brilliance, it’s not the
          only factor that determines how much a diamond will sparkle.
        </Text>
        <Text fontSize="lg">
          The cut quality of a diamond has a huge impact on how much it will
          sparkle. While an Excellent (GIA) diamond will look fantastic in just
          about any shape, even a round brilliant cut diamond will have
          relatively little sparkle if it has a Fair or Poor cut grade.
        </Text>
        <Text fontSize="lg">
          Because of this, it’s important to look at more than just a diamond’s
          shape if you’re looking for a lot of fire and brilliance. While shape
          plays an important role, it’s not the only factor that determines how
          much light a diamond will reflect.
        </Text>
        <Text fontSize="lg" fontWeight={"bold"}>
          What is the most expensive diamond shape?
        </Text>
        <Text fontSize="lg">
          The round brilliant cut is the most expensive diamond shape. This
          means that you’ll pay more for a 1 carat round brilliant diamond than
          you would for a diamond of equivalent cut quality, color, clarity and
          carat weight in a different shape.
        </Text>
        <Text fontSize="lg">
          The reason for this is the amount of rough diamond that’s cut away
          during the cutting and polishing process. On average, for a round
          brilliant cut, only about 40% of the original rough diamond is left in
          the finished diamond. In other words, around 60% of the rough diamond
          is wasted.
        </Text>
        <Text fontSize="lg">
          As we’ve covered in our guide to the most affordable diamond shapes,
          the most affordable diamond shapes are usually those that use a large
          amount of the original rough diamond. These include the:{" "}
          <strong>
            asscher cut, emerald cut, radiant cut, cushion cut and princess cut
          </strong>
          .
        </Text>
        <Text fontSize="lg">
          With this said, each diamond’s characteristics can affect its pricing
          and overall value for money. For example, while an emerald cut diamond
          will cost less than a round brilliant cut diamond, its large table
          means it’s more likely to display inclusions or color. This means that
          you might need to buy a diamond with a higher color or clarity grade
          than you would for a round brilliant cut, negating some of the value
          for money factor.
        </Text>
        <Text fontSize="lg" fontWeight={"bold"}>
          Which diamond shape looks the biggest?
        </Text>
        <Text fontSize="lg">
          Generally, diamond cuts with an elongated shape, such as the marquise
          or pear cuts, look larger than diamonds with a round or square shape.
          This is because these shapes tend to have a larger surface area
          relative to the total weight of the diamond.
        </Text>
        <Text fontSize="lg">
          This is occasionally referred to as “face-up size,” since it refers to
          the total area of the diamond that’s visible when it’s set in a
          diamond ring. Diamond shapes that appear larger than their carat
          weight include the:{" "}
          <strong>
            pear shape, oval cut, emerald cut, marquise cut and trillion cut
          </strong>
          .
        </Text>
        <Text fontSize="lg">
          Of these shapes, the marquise cut usually looks the largest due to its
          length, giving it a more impressive face-up size than other cuts.
        </Text>
        <Text fontSize="lg">
          The smallest looking diamonds cuts are the asscher, princess and
          cushion cuts. Because of their square length-to-width ratio, these
          diamond shapes all have a small diameter and surface area relative to
          their carat weight.
        </Text>
        <Text fontSize="lg" fontWeight={"bold"}>
          What is the most popular diamond shape?
        </Text>
        <Text fontSize="lg">
          Round cut diamonds are the most popular diamond shape. Approximately
          60% of all engagement rings feature a round cut diamond and
          approximately 75% of all diamonds sold are round cuts.
        </Text>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Need Help With Diamonds? Contact Our Experts
        </Text>
        <Text fontSize="lg">
          Understanding the basics of each diamond shape allows you to select
          what’s right for you or your loved one from a variety of options. Feel
          free to use this diamond shapes guide as you search for diamonds on
          the internet or in stores.
        </Text>
        <Text fontSize="lg">
          In the end, it’s most helpful to consider the unique person, style and
          occasion for which you are purchasing the diamond. For example, if
          it’s for an engagement ring, you’ll want to make sure your
          spouse-to-be will be comfortable and excited to wear the diamond for
          many years to come.
        </Text>
        <Text fontSize="lg">
          Still unsure of which diamond shape to buy? Contact us and we’ll be
          happy to share our expert advice and even help you search for
          diamonds—bringing you only the very best to choose from.
        </Text>
        <EducationBottomLineRec
          content={
            "From round to cushion cut, the shape of diamond that you choose will have a huge impact on the look of your fiancé-to-be’s ring. It could also have a surprisingly large impact on the engagement ring’s price. In this article we’ll go over the basics of each shape and get you pointed in the right direction for your diamond purchase journey."
          }
          whatToLookFor={whatToLookFor}
          whatToAvoid={whatToAvoid}
        />
      </Flex>
    </Flex>
  );
}
