import React from "react";
import { useTranslation } from "react-i18next";
import "./Cookies.css";

const Cookies = () => {
    const { t } = useTranslation();

    const content = t("cookies.content", { returnObjects: true });

    if (!Array.isArray(content)) {
        return <p>Erreur de chargement du contenu des cookies.</p>;
    }

    return (
        <div className="cookies-container">
            <div className="cookies-header">
                <h1 className="cookies-title">{t("cookies.title")}</h1>
                <div className="cookies-divider"></div>
            </div>
            <div className="cookies-content">
                {content.map((paragraph, index) => (
                    <p key={index} className="cookies-text">{paragraph}</p>
                ))}
            </div>
        </div>
    );
};

export default Cookies;
