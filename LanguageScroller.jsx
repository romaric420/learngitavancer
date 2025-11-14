import { useState, useEffect } from 'react';
import './LanguageScroller.css';

const LanguageScroller = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [showColumns, setShowColumns] = useState(true);

    // Textes médicaux - faciles à modifier ici
    const medicalTexts = [
        "Traduction médicale instantanée",
        "Connecter patients et médecins au-delà des frontières linguistiques",
        "Briser les barrières linguistiques dans les soins de santé"
    ];

    useEffect(() => {
        // Apparition initiale
        setTimeout(() => {
            setIsVisible(true);
        }, 500);

        // Cycle d'animation - augmenté à 10 secondes
        const textInterval = setInterval(() => {
            setIsVisible(false);

            setTimeout(() => {
                setTextIndex((prev) => (prev + 1) % medicalTexts.length);

                setTimeout(() => {
                    setIsVisible(true);
                }, 50);
            }, 1500);
        }, 10000);

        // Colonnes disparaissent toutes les 20 secondes
        const columnInterval = setInterval(() => {
            setShowColumns(false);
            setTimeout(() => {
                setShowColumns(true);
            }, 3000);
        }, 20000);

        return () => {
            clearInterval(textInterval);
            clearInterval(columnInterval);
        };
    }, []);

    const flags = [
        "🇫🇷", "🇬🇧", "🇸🇦", "🇪🇸", "🇩🇪", "🇮🇹", "🇵🇹", "🇷🇺",
        "🇨🇳", "🇯🇵", "🇰🇷", "🇹🇷", "🇵🇱", "🇳🇱", "🇸🇪", "🇳🇴",
        "🇩🇰", "🇫🇮", "🇬🇷", "🇨🇿", "🇭🇺", "🇷🇴", "🇮🇳", "🇹🇭",
        "🇻🇳", "🇮🇩", "🇮🇷", "🇮🇱", "🇺🇦", "🇰🇪", "🇸🇳", "🇲🇱",
        "🇿🇦", "🇵🇭", "🇵🇰", "🇧🇩", "🇱🇰", "🇹🇿", "🇪🇹", "🇸🇴",
        "🇪🇷", "🇳🇬", "🇧🇯", "🇲🇲", "🇰🇭", "🇱🇦", "🇲🇳", "🇧🇷",
        "🇲🇽", "🇦🇷", "🇨🇱", "🇨🇴", "🇵🇪", "🇻🇪", "🇪🇨", "🇧🇴",
        "🇺🇾", "🇵🇾", "🇨🇷", "🇵🇦", "🇬🇹", "🇭🇳", "🇸🇻", "🇳🇮",
        "🇨🇺", "🇩🇴", "🇭🇹", "🇯🇲", "🇧🇸", "🇧🇧", "🇹🇹", "🇬🇾",
        "🇸🇷", "🇧🇿", "🇦🇺", "🇳🇿", "🇫🇯", "🇵🇬", "🇼🇸", "🇹🇴",
        "🇻🇺", "🇸🇧", "🇰🇮", "🇹🇻", "🇳🇷", "🇵🇼", "🇲🇭", "🇫🇲",
        "🇦🇪", "🇶🇦", "🇰🇼", "🇧🇭", "🇴🇲", "🇾🇪", "🇯🇴", "🇱🇧",
        "🇸🇾", "🇮🇶", "🇦🇫", "🇦🇿", "🇦🇲", "🇬🇪", "🇰🇿", "🇺🇿",
        "🇹🇲", "🇰🇬", "🇹🇯", "🇲🇩", "🇧🇾", "🇱🇹", "🇱🇻", "🇪🇪",
        "🇦🇱", "🇽🇰", "🇲🇰", "🇧🇦", "🇷🇸", "🇲🇪", "🇭🇷", "🇸🇮",
        "🇸🇰", "🇧🇬", "🇲🇦", "🇩🇿", "🇹🇳", "🇱🇾", "🇪🇬", "🇸🇩",
    ];

    const createColumn = (startIndex) => {
        const columnFlags = [];
        for (let i = 0; i < 15; i++) {
            columnFlags.push(flags[(startIndex + i) % flags.length]);
        }
        return columnFlags;
    };

    return (
        <div className="language-scroller-container">
            {/* Particules d'animation en arrière-plan */}
            <div className="animated-background">
                <div className="floating-circle circle-1"></div>
                <div className="floating-circle circle-2"></div>
                <div className="floating-circle circle-3"></div>
                <div className="floating-circle circle-4"></div>
                <div className="floating-circle circle-5"></div>
                <div className="wave wave-1"></div>
                <div className="wave wave-2"></div>
                <div className="wave wave-3"></div>
            </div>

            {/* Étoiles brillantes comme dans le ciel */}
            <div className="star star-1"></div>
            <div className="star star-2"></div>
            <div className="star star-3"></div>
            <div className="star star-4"></div>
            <div className="star star-5"></div>
            <div className="star star-6"></div>
            <div className="star star-7"></div>
            <div className="star star-8"></div>
            <div className="star star-9"></div>
            <div className="star star-10"></div>
            <div className="star star-11"></div>
            <div className="star star-12"></div>
            <div className="star star-13"></div>
            <div className="star star-14"></div>
            <div className="star star-15"></div>
            <div className="star star-16"></div>
            <div className="star star-17"></div>
            <div className="star star-18"></div>
            <div className="star star-19"></div>
            <div className="star star-20"></div>
            <div className="star star-21"></div>
            <div className="star star-22"></div>
            <div className="star star-23"></div>
            <div className="star star-24"></div>
            <div className="star star-25"></div>
            <div className="star star-26"></div>
            <div className="star star-27"></div>
            <div className="star star-28"></div>
            <div className="star star-29"></div>
            <div className="star star-30"></div>
            <div className="star star-31"></div>
            <div className="star star-32"></div>
            <div className="star star-33"></div>
            <div className="star star-34"></div>
            <div className="star star-35"></div>
            <div className="star star-36"></div>
            <div className="star star-37"></div>
            <div className="star star-38"></div>
            <div className="star star-39"></div>
            <div className="star star-40"></div>

            {/* Blur sombre en arrière-plan */}
            <div className="dark-blur-overlay"></div>

            {/* Texte central simple sans conteneur */}
            <div className={`central-text ${isVisible ? 'visible' : 'hidden'}`}>
                <h1>{medicalTexts[textIndex]}</h1>
            </div>

            {/* Colonnes de drapeaux défilants */}
            <div className={`scrolling-columns ${showColumns ? 'columns-visible' : 'columns-hidden'}`}>
                {[0, 1, 2, 3, 4, 5].map((colIndex) => (
                    <div key={colIndex} className="language-column">
                        <div className="language-scroll">
                            {createColumn(colIndex * 8).map((flag, idx) => (
                                <div key={`${colIndex}-${idx}`} className="flag-item">
                                    <span className="flag">{flag}</span>
                                </div>
                            ))}
                            {createColumn(colIndex * 8).map((flag, idx) => (
                                <div key={`${colIndex}-${idx}-dup`} className="flag-item">
                                    <span className="flag">{flag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LanguageScroller;