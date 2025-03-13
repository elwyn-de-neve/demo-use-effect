function InfoBox({ title, children }) {
    return (
        <div className="info-box">
            {title && <h2>{title}</h2>}
            {children}
        </div>
    );
}

export default InfoBox; 