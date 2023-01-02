import "../styles.css/Banner.css"

export default function Banner({img, texte}) {
    return (
        <div className="banner">            
            <img className="banner-img" src={img} alt="bannière"/>            
            <span className="banner-txt">{texte}</span>
        </div>
    )
}