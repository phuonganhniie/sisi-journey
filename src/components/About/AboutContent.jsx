import React, { useState } from "react";

const AboutContent = () => {
    let englishContent = (
        <div>
            <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "justify", fontSize: "18px" }}>
                    Hello there, thank you for visiting my website. I'm from Vietnam, so I have a deep love for the Vietnamese language. That's why I chose to introduce myself in my native language, partly because I don't want to turn this into a too-professional portfolio or too-personal blog, but I still leave the English translation, for you.
                    <br />    
                    <br /> To briefly introduce myself, I am just an ordinary girl. But perhaps what I am proud of is that I am becoming a developer or even more so, a true software engineer. 
                    <br />
                    <br /> I love technology, I love coding, I love traveling, I love reading books even though I am sometimes lazy, and I am always very curious about this world. 
                    <br />
                    <br /> But why did I decide to create this website? Because I like sharing. I like to write about something new that I am learning; or a share during my work or experience; or express my thoughts and opinions on any issue that I care about; or in other words, my blog is not only about programming, technology but also about life, worldview, and experience.
                    <br />
                    <br /> Finally, I understand that with the strengthening of AI - the most popular one now is OpenAI, or the quantum world - the picture of an advanced technology world that I always imagine of is gradually improving. In the future, there will certainly be even better pictures created, but above all, I know that I will not give up on being an atomic for creating a better reality.
                </p>
            </blockquote>
        </div>
    );

    let vietnameseContent = (
        <div>  
            <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "justify", fontSize: "18px" }}>
                    Có lẽ phần giới thiệu ở trang này mình sẽ viết bằng tiếng Việt, phần vì đây là tiếng mẹ đẻ của mình, phần vì mình không muốn
                    ở đây trở thành một quả porfolio quá là chuyên nghiệp hay một chiếc blog quá là cá nhân, nhưng mình vẫn sẽ
                    để tiếng Anh ở bên dưới nhé.
                    <br />    
                    <br /> Nói sơ qua thì mình là một cô gái bình thường, nhưng có lẽ điều khiến mình tự hào nhất ở bản thân là mình đang là
                    một lập trình viên hay xa hơn nữa là một kỹ sư phần mềm thực thụ ✌️. 
                    <br />
                    <br /> Mình thích công nghệ, mình thích code, mình thích du lịch, mình thích đọc sách dù đôi khi mình cũng lười lắm và mình luôn rất tò mò về thế giới này.
                    <br />
                    <br /> Mình thích chia sẻ, nhất là chia sẻ cùng chính bản thân mình. Mình thích viết về một cái mới mà mình đang học hỏi; hay một điều
                    nào đó trong quá trình mình đi làm, mình trải nghiệm; hay nói lên suy nghĩ, quan điểm của mình về một vấn đề bất kì mà mình quan tâm; hay nói cách khác
                    blog của mình không chỉ về lập trình, công nghệ mà còn về cuộc sống, thế giới quan và sự trải nghiệm. 
                    <br />
                    <br /> Cuối cùng, mình hiểu rằng với sự phát triển của trí tuệ nhân tạo, hay nhiều hơn là lượng tử - bức tranh về thế giới
                    công nghệ tiên tiến mà mình luôn tưởng đến đang dần hoàn thiện hơn. Trong tương lai chắc chắn sẽ có nhiều bức tranh xuất sắc hơn thế này được tạo ra, nhưng trên
                    hết mình biết, bản thân sẽ là một trong những nguyên tử cùng tạo ra những hiện thực tốt đẹp như thế này, trong một thế giới mà mình cho rằng vẫn còn rất nhiều hy vọng.
                </p>
            </blockquote>
        </div>
    );

    return (
        LanguageSwitch({englishText: englishContent, vietnameseText: vietnameseContent})
    );
}

const LanguageSwitch = ({ englishText, vietnameseText }) => {
    const [showEnglish, setShowEnglish] = useState(false);
    // const [buttonText, setButtonText] = useState("English");

    const handleToggle = () => {
        setShowEnglish(!showEnglish);
        // setButtonText(showEnglish ? "English" : "Tiếng Việt")
    };

    // return (
    //     <div>
    //         {showEnglish ? englishText : vietnameseText}
    //         <button onClick={handleToggle}>{buttonText}</button>
    //     </div>
    // );

    const flagIcon = showEnglish ? <img src="https://flagcdn.com/vn.svg" width="30" alt="" /> : <img src="https://flagcdn.com/us.svg" width="30" alt="" />
    const textToDisplay = showEnglish ? englishText : vietnameseText

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <p style={{ textAlign: "justify", fontSize: "15px" }}>
                {textToDisplay}
            </p>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <span style={{cursor: "pointer"}} onClick={handleToggle}>{flagIcon}</span>
            </div>
        </div>
    )
};

export default AboutContent;