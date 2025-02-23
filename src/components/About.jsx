import React, { useState } from 'react';
import '../assets/css/about.css';
import Chamodya from '../assets/images/Propic.chamodya.png';
import Pinsara from '../assets/images/Propic.pinsara.png';
import Thisaru from '../assets/images/Propic.thisaru.png';
import Shakya from '../assets/images/Propic.shakya.png';
import Hasindi from '../assets/images/Propic.hasindi.png';
import Piyusha from '../assets/images/Propic.piyusha.png';

const teamMembers = [
    {
        name: 'Chamodya Ganegamage',
        role: 'Full Stack Developer',
        image: Chamodya,
        title: 'Revolutionizing Fashion with AI!',
        text: 'Styloft is all about blending AI with fashion to create a seamless design experience. Our backend ensures smooth and efficient user interactions, making every design journey unique.'
    },
    {
        name: 'Pinsara Pasandul',
        role: 'Product Manager & UX Designer',
        image: Pinsara,
        title: 'Design Meets Simplicity!',
        text: 'Our goal was to make fashion designing effortless. With a sleek and intuitive UI, users can explore styles, engage with the community, and design with confidence.'
    },
    {
        name: 'Thisaru Shamal',
        role: 'Frontend Developer',
        image: Thisaru,
        title: 'Crafting an Engaging Experience!',
        text: 'Styloft is built for designers of all levels! With an elegant and responsive UI, we ensure a seamless journey from inspiration to creation.'
    },
    {
        name: 'Shakya Rajapaksha',
        role: 'Full Stack Developer',
        image: Shakya,
        title: 'Scalability & Performance at Its Core!',
        text: 'From authentication to real-time collaboration, we’ve built a robust backend to support Styloft’s growing user base and evolving feature set.'
    },
    {
        name: 'Hasindi Enasha',
        role: 'Full Stack Developer',
        image: Hasindi,
        title: 'Bridging Creativity & Technology!',
        text: 'Styloft is more than just a tool—it’s a movement. We’ve engineered a platform where technology empowers creativity and collaboration like never before.'
    },
    {
        name: 'Piyusha Senodi',
        role: 'Frontend Developer',
        image: Piyusha,
        title: 'Seamless & Intuitive UI!',
        text: 'Every detail in Styloft’s UI is designed to inspire. From smooth navigation to dynamic design tools, we’re ensuring users have an effortless experience from start to finish.'
    }
];

const StoryCard = ({ member }) => (
    <div className="story-card">
        <div className="team-member">
            <img src={member.image || "/placeholder.svg"} alt="Team member" className="member-image" />
            <div className="member-info">
                <h4 className="member-name">{member.name}</h4>
                <p className="member-role">{member.role}</p>
            </div>
        </div>
        <h3 className="story-title">{member.title}</h3>
        <p className="story-text">{member.text}</p>
    </div>
);

export default function TeamStories() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScrollLeft = () => {
        setScrollPosition(prevPosition => Math.min(prevPosition + 300, 0)); // Adjust the value as needed
    };

    const handleScrollRight = () => {
        setScrollPosition(prevPosition => prevPosition - 300); // Adjust the value as needed
    };

    return (
        <div className="team-container">
            <div className="team-header">
                <span className="team-label">OUR TEAM</span>
                <h2 className="team-heading">Stories From Our Developers</h2>
            </div>

            <div className="story-cards-wrapper">
                <div className="story-cards" style={{ transform: `translateX(${scrollPosition}px)` }}>
                    {teamMembers.map((member, index) => (
                        <StoryCard key={index} member={member} />
                    ))}
                    {teamMembers.map((member, index) => (
                        <StoryCard key={`duplicate-${index}`} member={member} />
                    ))}
                </div>
            </div>

            <div className="navigation-buttons">
                <button className="nav-button" onClick={handleScrollLeft}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <button className="nav-button" onClick={handleScrollRight}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>
        </div>
    );
}