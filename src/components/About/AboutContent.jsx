import React, { useState } from "react";

const AboutContent = () => {
    let englishContent = (
        <div>
            <blockquote className="blockquote">
                <p className="text-base text-justify mt-10">
                    Hello there, thank you for visiting my website. I'm from Vietnam, so I have a deep love for the Vietnamese language. That's why I chose to introduce myself in my native language, partly because I don't want to turn this into a too-professional portfolio or too-personal blog, but I still leave the English translation, for you.
                    <br />    
                    <br /> To briefly introduce myself, I'm just an ordinary girl. 
                    But perhaps what I'm proud of is that I'm becoming a developer or even more so, a true software engineer. 
                    <br />
                    <br /> I love technology, I love coding, I love traveling, I love reading books even though I'm sometimes lazy, 
                    I love muzik and I have an enormous curiosity about this world. 
                    <br />
                    <br /> I enjoy sharing, especially with myself. 
                    I like writing about something new that I'm learning; or something during my work process, my experiences; 
                    or expressing my thoughts and opinions on any issue that I care about; 
                    or in other words, my world is not only about programming, technology but also about life, worldview, emotional and experiences.
                    <br />
                    <br /> I learn every day, not because I want to become someone brilliant or outstanding, but because I always remember that knowledge is the most steadfast path to everything that has, is, and will exist in this universe 
                    (oh, and also to make a bit of money 😚).
                    I just hope that I'm a little better today than I was yesterday.
                    Life has its ups and downs, and so do people - "Every day is not Sunday".
                    <br />
                    <br /> I love the journey I'm on, and I'm always grateful to the predecessors, brothers, sisters, friends, colleagues, 
                    and younger ones that I have been fortunate to meet, to be helped, to learn from, to develop my thinking and kindness from them.
                    <br />
                    <br /> And I'm Anh Phuong Do, or Si - Very pleasure that you have visited my Milky Way 🩷
                </p>
            </blockquote>
        </div>
    );

    let vietnameseContent = (
        <div>  
            <blockquote className="blockquote">
                <p className="text-base text-justify mt-10">
                    Có lẽ phần giới thiệu ở trang này mình sẽ viết bằng tiếng Việt, phần vì đây là tiếng mẹ đẻ của mình, phần vì mình không muốn
                    ở đây trở thành một quả porfolio quá là chuyên nghiệp hay một chiếc blog quá là cá nhân, nhưng mình vẫn sẽ
                    để tiếng Anh ở bên dưới nhé.
                    <br />    
                    <br /> Nói sơ qua thì mình là một cô gái bình thường, nhưng có lẽ điều khiến mình tự hào nhất ở bản thân là mình đang là
                    một lập trình viên hay xa hơn nữa là một kỹ sư phần mềm thực thụ ✌️. 
                    <br />
                    <br /> Mình thích công nghệ, mình thích code, mình thích du lịch, mình thích đọc sách dù đôi khi mình cũng lười lắm, mình yêu âm nhạc và mình luôn rất tò mò về thế giới này.
                    <br />
                    <br /> Mình học tập mỗi ngày, không phải vì mình muốn trở thành một người tài giỏi, xuất chúng, mà chỉ vì mình luôn ghi nhớ rằng tri thức là con đường vững vàng nhất đưa mình đến những điều đã, đang và sẽ hiện hữu (ít nhất là) ở vũ trụ này 
                    (à, còn cả để kiếm chút xiền nữa 😘). 
                    Mình chỉ mong ngày hôm nay của mình lại tốt hơn ngày hôm qua một chút.
                    <br />
                    <br /> Mình thích chia sẻ, nhất là chia sẻ cùng bản thân mình. Mình thích viết về một cái mới mà mình đang học hỏi; hay một điều
                    nào đó trong quá trình mình đi làm, mình trải nghiệm; hay nói lên suy nghĩ, quan điểm của mình về một vấn đề bất kì mà mình quan tâm; hay nói cách khác
                    thế giới của mình không chỉ về lập trình, công nghệ mà còn về cuộc sống, quan điểm, cảm xúc và trải nghiệm. 
                    <br />
                    <br /> Mình rất thích hành trình mà mình đang đi, và mình luôn biết ơn những bậc tiền bối, những anh chị, bạn bè, đồng nghiệp, các em mà mình 
                    may mắn được gặp gỡ, được giúp đỡ, được học hỏi, được phát triển từ tư duy và sự tử tế của họ. 
                    <br />
                    <br /> Và mình là Phương Anh, hoặc là Si - Rất vui vì bạn đã ghé thăm Dải Ngân Hà của mình 🩷
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

    const handleToggle = () => {
        setShowEnglish(!showEnglish);
    };

    const flagIcon = showEnglish ? <img src="https://flagcdn.com/vn.svg" width="30" alt="" /> : <img src="https://flagcdn.com/us.svg" width="30" alt="" />
    const textToDisplay = showEnglish ? englishText : vietnameseText

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <div style={{ textAlign: "justify" }}>
                {textToDisplay}
            </div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px", marginTop: "10px" }}>
                <span style={{cursor: "pointer"}} onClick={handleToggle}>{flagIcon}</span>
            </div>
        </div>
    )
};

export default AboutContent;