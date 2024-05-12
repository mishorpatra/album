import React, { useState } from 'react';
import './App.css';
import { data } from './data';

function App() {
    const [slideIndex, setSlideIndex] = useState(1);
    const [password, setPassword] = useState('');
    const [showContent, setShowContent] = useState(false);
    const [showContentExpand, setContentExpand] = useState(false)
    const [photos] = useState(data);

    function openModal() {
        setContentExpand(true);
    }

    function closeModal() {
        setContentExpand(false);
    }

    function plusSlides(n) {
        showSlides(slideIndex + n);
    }

    function currentSlide(n) {
        showSlides(n);
    }

    function showSlides(n) {
        let newIndex = n;
        if (newIndex > photos.length) {
            newIndex = 1;
        }
        if (newIndex < 1) {
            newIndex = photos.length;
        }
        setSlideIndex(newIndex);
    }

    function checkPassword() {
        const correctPassword = '16062023';
        if (password === correctPassword) {
            setShowContent(true);
        } else {
            alert("Incorrect password. Please try again.");
        }
    }

    return (
        <div>
            <header>
                <h1>Our Romantic Moments</h1>
            </header>
            {!showContent && (
                <div className="password-prompt">
                    <p>password hint: when it all started</p>
                    <label htmlFor="password">Enter the password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={checkPassword}>Submit</button>
                </div>
            )}
            {showContent && (
                <div>
                    <div className="quote-section">
                        <blockquote className="quote">
                            "You are my today and all of my tomorrows."
                        </blockquote>
                        <blockquote className="quote">
                            "In your arms is where I belong."
                        </blockquote>
                    </div>

                    <div className="gallery">
                        {photos.map((photo, index) => (
                            <div className="photo" key={index} onClick={() => { openModal(); currentSlide(index + 1); }}>
                                <img src={photo} alt={`Photo ${index + 1}`} />
                            </div>
                        ))}

                        {showContentExpand && (
                            <div id="myModal" className="modal">
                                <span className="close cursor" onClick={closeModal}>&times;</span>
                                <div className="modal-content">
                                    {photos.map((photo, index) => (
                                        <div className="mySlides" key={index} style={{ display: slideIndex === index + 1 ? 'block' : 'none' }}>
                                            <img src={photo} alt={`Photo ${index + 1}`} />
                                        </div>
                                    ))}

                                    <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                                    <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
