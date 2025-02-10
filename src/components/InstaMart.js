import { useState } from "react"

const Section = ({title, description, isVisible, setIsVisible}) => {
    return(
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl" >{title}</h3>
            {isVisible?(
                <button
                onClick={() => setIsVisible(false)}
                className="cursor-pointer underline"
                >
                    Hide
                </button>
            ):(
                <button
                onClick={() => setIsVisible(true)}
                className="cursor-pointer underline"
                >
                    Show
                </button>
            )}

            {isVisible && <p>{description}</p>}
        </div>
    )
}
const InstaMart = () =>{
    // const [sectionConfig, setSectionConfig]= useState({
    //     showAbout:false,
    //     showTeam:false,
    //     showCareers:false
    // });sectionConfig.showAbout

    const [visibleSection, setIsVisibleSection] = useState(null);
    return(
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section 
            title={"About Instamart"}
            description={
                "The tree missed the days the kids used to come by and play. It still wore the tire swing the kids had put up in its branches years ago although both the tire and the rope had seen better days. The tree had watched all the kids in the neighborhood grow up and leave, and it wondered if there would ever be a time when another child played and laughed again under its branches. That was the hope that the tree wished every day as the swing gently swung empty in the wind."
            }
            isVisible={visibleSection=="about"}
            setIsVisible={() =>
                setIsVisibleSection(visibleSection === "about" ? null : "about")
                // setSectionConfig({
                // showAbout:true,
                // showTeam:false,
                // showCareers:false,
                // })
            }
            />

            <Section 
            title={"Team Instamart"}
            description={
                "The tree missed the days the kids used to come by and play. It still wore the tire swing the kids had put up in its branches years ago although both the tire and the rope had seen better days. The tree had watched all the kids in the neighborhood grow up and leave, and it wondered if there would ever be a time when another child played and laughed again under its branches. That was the hope that the tree wished every day as the swing gently swung empty in the wind."
            }
            isVisible={visibleSection=="team"}
            setIsVisible={() =>
                setIsVisibleSection(visibleSection === "team" ? null : "team")
                // setSectionConfig({
                // showAbout:false,
                // showTeam:true,
                // showCareers:false,
                // })
            }
            />

            <Section 
            title={"Careers"}
            description={
                "The tree missed the days the kids used to come by and play. It still wore the tire swing the kids had put up in its branches years ago although both the tire and the rope had seen better days. The tree had watched all the kids in the neighborhood grow up and leave, and it wondered if there would ever be a time when another child played and laughed again under its branches. That was the hope that the tree wished every day as the swing gently swung empty in the wind."
            }
            isVisible={visibleSection=="career"}
            setIsVisible={() =>
                setIsVisibleSection(visibleSection === "career" ? null : "career")
                // setSectionConfig({
                // showAbout:false,
                // showTeam:false,
                // showCareers:true,
                // })
            }
            />
        </div>
    )
}

export default InstaMart;