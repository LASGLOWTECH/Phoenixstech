
import { Frame1, Frame2, Frame3 } from "../../components/images";
import { Image4 } from "../../components/images";

const Testimony = [
    {
        id: 1,
        name: "Sarah Thompson",
        role: "Head of Customer Relations, FinTech Solutions",
        image: Frame2, // Replace with actual image
        text:
            "The team exceeded our expectations, delivering exceptional support that helped us scale our customer service operations globally. Their professionalism and expertise are unmatched.",

        previews: [
            Frame3,
            Frame1
        ]
    },
    {
        id: 2,
        name: "Daniel Brooks",
        role: "CX Manager, TechPulse",
        image: Image4,
        text:
            "Amazing experience! Their customer service solutions helped us streamline our workflow and build better customer trust.",
        previews: [
            Image4,
            Image4
        ]

    },
    {
        id: 3,
        name: "Linda Ray",
        role: "Operations Lead, SoftCom",
        image: Frame2,
        text:
            "Highly professional and always on time. A truly multilingual support team with outstanding results.",

        previews: [
            Frame2,
            Frame2
        ]

    },
]

export default Testimony;



